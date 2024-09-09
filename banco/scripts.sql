CREATE TABLE tipo_transacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (255) NOT NULL
); 

CREATE TABLE transacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL, 
    tipo_transacao_id INT,
    data DATE, 
    FOREIGN KEY (tipo_transacao_id) REFERENCES tipo_transacao(id)
); 