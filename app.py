from flask import Flask, render_template, request, jsonify
import json
import os
from datetime import datetime

app = Flask(__name__)

# Arquivo para armazenar dados
DATA_FILE = 'data.json'

def load_data():
    """Carrega dados do arquivo JSON"""
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
                # Garantir que contas_prioritarias existe
                if 'contas_prioritarias' not in data:
                    data['contas_prioritarias'] = []
                return data
            except:
                return {'saldo': 0, 'transacoes': [], 'contas_prioritarias': []}
    return {'saldo': 0, 'transacoes': [], 'contas_prioritarias': []}

def save_data(data):
    """Salva dados no arquivo JSON"""
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

@app.route('/')
def index():
    """Página principal"""
    data = load_data()

    # Calcular receitas e gastos separadamente
    receitas = sum(t['valor'] for t in data['transacoes'] if t['tipo'] == 'receita')
    gastos = sum(t['valor'] for t in data['transacoes'] if t['tipo'] == 'gasto')
    
    # Calcular dízimo (10% das receitas)
    dizimo = receitas * 0.10
    
    # Calcular saldo real (descontando o dízimo)
    saldo_real = receitas - gastos - dizimo

    return render_template('index.html', 
                         saldo=saldo_real, 
                         transacoes=data['transacoes'], 
                         receitas=receitas, 
                         gastos=gastos,
                         dizimo=dizimo,
                         contas_prioritarias=data.get('contas_prioritarias', []))

@app.route('/adicionar_receita', methods=['POST'])
def adicionar_receita():
    """Adiciona uma receita"""
    try:
        valor = float(request.form['valor'])
        descricao = request.form['descricao']

        data = load_data()
        data['saldo'] += valor
        data['transacoes'].append({
            'tipo': 'receita',
            'valor': valor,
            'descricao': descricao,
            'data': datetime.now().strftime('%d/%m/%Y %H:%M')
        })
        save_data(data)

        return jsonify({'success': True, 'novo_saldo': data['saldo']})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/adicionar_gasto', methods=['POST'])
def adicionar_gasto():
    """Adiciona um gasto"""
    try:
        valor = float(request.form['valor'])
        descricao = request.form['descricao']
        categoria = request.form.get('categoria', '')

        data = load_data()
        if data['saldo'] >= valor:
            data['saldo'] -= valor
            transacao = {
                'tipo': 'gasto',
                'valor': valor,
                'descricao': descricao,
                'data': datetime.now().strftime('%d/%m/%Y %H:%M')
            }
            if categoria:
                transacao['categoria'] = categoria
            data['transacoes'].append(transacao)
            save_data(data)
            return jsonify({'success': True, 'novo_saldo': data['saldo']})
        else:
            return jsonify({'success': False, 'error': 'Saldo insuficiente'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/resetar_saldo', methods=['POST'])
def resetar_saldo():
    """Reseta o saldo e histórico"""
    data = {'saldo': 0, 'transacoes': []}
    save_data(data)
    return jsonify({'success': True, 'novo_saldo': 0})

@app.route('/get_data', methods=['GET'])
def get_data():
    """Retorna os dados atuais"""
    try:
        data = load_data()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/atualizar_dados', methods=['POST'])
def atualizar_dados():
    """Atualiza os dados (usado para exclusão de transações)"""
    try:
        data = request.get_json()
        save_data(data)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/adicionar_conta_prioritaria', methods=['POST'])
def adicionar_conta_prioritaria():
    """Adiciona uma conta prioritária"""
    try:
        data_request = request.get_json()
        nome = data_request['nome']
        valor = float(data_request['valor'])
        data_vencimento = data_request['data_vencimento']

        data = load_data()
        conta = {
            'nome': nome,
            'valor': valor,
            'data_vencimento': data_vencimento,
            'pago': False,
            'data_criacao': datetime.now().strftime('%d/%m/%Y %H:%M')
        }
        data['contas_prioritarias'].append(conta)
        save_data(data)

        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/marcar_conta_paga', methods=['POST'])
def marcar_conta_paga():
    """Marca uma conta como paga"""
    try:
        data_request = request.get_json()
        index = int(data_request['index'])

        data = load_data()
        if 0 <= index < len(data['contas_prioritarias']):
            data['contas_prioritarias'][index]['pago'] = True
            data['contas_prioritarias'][index]['data_pagamento'] = datetime.now().strftime('%d/%m/%Y %H:%M')
            save_data(data)
            return jsonify({'success': True})
        else:
            return jsonify({'success': False, 'error': 'Índice inválido'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/excluir_conta_prioritaria', methods=['POST'])
def excluir_conta_prioritaria():
    """Exclui uma conta prioritária"""
    try:
        data_request = request.get_json()
        index = int(data_request['index'])

        data = load_data()
        if 0 <= index < len(data['contas_prioritarias']):
            data['contas_prioritarias'].pop(index)
            save_data(data)
            return jsonify({'success': True})
        else:
            return jsonify({'success': False, 'error': 'Índice inválido'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
