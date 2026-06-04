"""
M1_anonymizer.py
Anonymizes Portuguese bank statements by replacing NIFs, IBANs, common Portuguese names, and bank names with placeholders.
"""

import os
import re
import sys

# Common Portuguese first and last names for anonymization
COMMON_NAMES = {
    "maria", "joão", "joao", "josé", "jose", "ana", "manuel", "francisco", "antónio", "antonio", 
    "pedro", "paulo", "miguel", "carlos", "luís", "luis", "nuno", "tiago", "diogo", "filipe", 
    "gonçalo", "goncalo", "sara", "sofia", "isabel", "teresa", "cristina", "marta", "catarina", 
    "sandra", "patrícia", "patricia", "andreia", "carla", "rita", "inês", "ines", "sónia", "sonia", 
    "cláudia", "claudia", "duarte", "brito", "hugo", "bruno", "ricardo", "daniel", "vítor", "vitor", 
    "jorge", "tomas", "tomás", "eduardo", "luísa", "luisa", "margarida", "filipa", "beatriz", 
    "mariana", "leonor", "clara", "matilde", "alice", "carolina", "diana", "joana", "silva", 
    "santos", "ferreira", "pereira", "oliveira", "costa", "rodrigues", "martins", "jesus", "sousa", 
    "pinto", "gomes", "lopes", "marques", "alves", "almeida", "ribeiro", "carvalho", "teixeira", 
    "moreira", "correia", "mendes", "nunes", "soares", "vieira", "monteiro", "cardoso", "rocha", 
    "neves", "coelho", "cruz", "cunha", "pires", "ramos", "barbosa", "pinho", "antunes", "leal", 
    "guerrero", "simões", "simoes", "henriques", "saraiva", "fonseca", "sampaio", "machado", 
    "lima", "castro", "tavares", "fernandes", "gonçalves", "goncalves", "cabral", "mota", 
    "valente", "sanches", "sequeira", "morais", "macedo", "rego", "borges", "carmo", "conceição", 
    "conceicao", "fatima", "fátima", "lourdes", "dores", "piedade", "assunção", "assuncao"
}

# Portuguese banks for anonymization
BANK_NAMES = {
    "cgd", "caixa geral de depósitos", "caixa geral de depositos", "caixa geral", "novo banco", "novobanco",
    "millennium bcp", "millennium", "bcp", "bpi", "santander", "santander totta", "totta", "activobank", "activo bank", 
    "montepio", "ctt", "banco ctt", "revolut", "n26", "abanca", "barclays", "deutsche bank", 
    "eurobic", "bic", "banco bic", "wizink", "cofidis", "cetelem", "crédito agrícola", "credito agricola", 
    "caixa de crédito agrícola"
}

def build_regex_pattern(word_set):
    """Creates a case-insensitive regex pattern from a set of words, sorted by length descending."""
    escaped = [re.escape(word) for word in sorted(word_set, key=len, reverse=True)]
    return r'(?i)\b(?:' + '|'.join(escaped) + r')\b'

def anonymize_text(text):
    """Replaces sensitive information (IBAN, NIF, names, bank names) with placeholders."""
    # 1. Anonymize IBANs (Portuguese and general formats starting with PT)
    iban_pattern = r'(?i)\bPT\d{2}(?:\s*\d){21}\b'
    text = re.sub(iban_pattern, '[IBAN_OCULTO]', text)
    
    # 2. Anonymize NIFs (9 digits starting with 1, 2, 3, 5, 6, 7, 8, 9)
    nif_pattern = r'\b[12356789]\d{8}\b'
    text = re.sub(nif_pattern, '[NIF_OCULTO]', text)
    
    # 3. Anonymize Bank Names
    bank_pattern = build_regex_pattern(BANK_NAMES)
    text = re.sub(bank_pattern, '[BANCO_OCULTO]', text)
    
    # 4. Anonymize Names based on statement prefixes
    name_prefixes = r'(?i)\b(?:Titular|Beneficiário|Beneficiario|Destinatário|Destinatario|Remetente|Nome|De|Para)[:\s-]+([A-Za-zÀ-ÖØ-öø-ÿ]{2,20}(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]{1,20}){0,4})\b'
    transfer_prefixes = r'(?i)\b(?:Trf|Transferência|Transferencia)(?:\s+mb\s?way|\s+mbway|\s+sepa|\s+internacional|\s+imediata|\s+interbancária|\s+interbancaria)?\s+(?:de|para|p/|a|da|do)[:\s-]+([A-Za-zÀ-ÖØ-öø-ÿ]{2,20}(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]{1,20}){0,4})\b'

    def clean_name_match(match):
        full_match = match.group(0)
        name_part = match.group(1)
        lower_name = name_part.lower()
        if any(kw in lower_name for kw in ['banco', 'extrato', 'cartao', 'cartão', 'tarifa', 'juros', 'comissão', 'comissao', 'imposto', 'debit', 'credit']):
            return full_match
        return full_match.replace(name_part, ' [NOME_OCULTO]')

    text = re.sub(name_prefixes, clean_name_match, text)
    text = re.sub(transfer_prefixes, clean_name_match, text)

    # 5. Anonymize standalone Names
    name_pattern = build_regex_pattern(COMMON_NAMES)
    text = re.sub(name_pattern, '[NOME_OCULTO]', text)
    
    # Clean up adjacent name placeholders (e.g. "[NOME_OCULTO] [NOME_OCULTO]" -> "[NOME_OCULTO]")
    text = re.sub(r'\[NOME_OCULTO\](?:\s+\[NOME_OCULTO\])+', '[NOME_OCULTO]', text)
    
    return text

def main():
    input_filename = 'extrato.txt'
    output_filename = 'extrato_anonimo.txt'
    
    if os.path.exists(input_filename):
        print(f"A ler dados de '{input_filename}'...")
        with open(input_filename, 'r', encoding='utf-8') as f:
            content = f.read()
    else:
        print(f"Ficheiro '{input_filename}' não encontrado.")
        print("Introduza ou cole o texto do extrato abaixo.")
        print("(Pressione Enter + Ctrl+Z no Windows ou Ctrl+D no Unix para terminar o envio de dados):")
        print("-" * 60)
        try:
            content = sys.stdin.read()
        except KeyboardInterrupt:
            print("\nOperação cancelada pelo utilizador.")
            sys.exit(1)
        print("-" * 60)
        
    if not content.strip():
        print("Erro: Nenhum texto foi fornecido para anonymizar.")
        sys.exit(1)
        
    print("A processar a anonimização...")
    anonymized_content = anonymize_text(content)
    
    # Save the output
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(anonymized_content)
        print(f"\nSucesso! O extrato anonimizado foi gravado em '{output_filename}'.")
    except Exception as e:
        print(f"Erro ao gravar o ficheiro: {e}")
        
    print("\n--- Resultado Anonimizado ---")
    print(anonymized_content)
    print("-" * 30)

if __name__ == '__main__':
    main()
