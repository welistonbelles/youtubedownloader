# README

<p align="center">
    <a href="#sobre">Sobre</a>
    <a href="#tecnologias">Tecnologias</a>
    <a href="#funcionalidades">Funcionalidades</a>
    <a href="#demonstracao">Demonstração</a>
    <a href="#instalacao">Instalação</a>
</p>

# Sobre
<p>Este projeto foi construído com o intuito de praticar o uso de Django.<br>
Consiste em um gerenciador de downloads, feito exclusivamente para realizar o downloa de videos/musicas do youtube .</p>

# Tecnologias
<p>O projeto foi construído utilizando as seguintes tecnologias:</p>
<ul>
    <li>Python</li>
    <li>Django</li>
    <li>Django Rest Framework</li>
    <li>JavaScript</li>
    <li>HTML5</li>
    <li>CSS</li>
</ul>

# Funcionalidades
- [x] Consumir API para envio do video desejado.
- [x] Listar os formatos disponíveis para download.
- [x] Realizar o download da musica/video no formado desejado.

# Demonstracao
<h1 align="center">
    Homepage do projeto
    <img alt="Homepage" src="./github/home.png"/>
</h1>


# Instalacao
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://gitscm.com), [Python](https://www.python.org/downloads/).
Além disso é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/download) ou o [PyCharm](https://www.jetbrains.com/pt-br/pycharm/download/) (Recomendado).

```bash
# Clone este repositório
$ git clone <https://github.com/welistonbelles/youtubedownloader>

# Acesse a pasta do projeto no terminal/cmd
$ cd youtubedownloader

# Instale as dependências
$ pip install -r requirements.txt
```
### 🔧 Configuracao
```python
# Crie as migrations
python manage.py makemigrations

# Aplique elas ao seu projeto
python manage.py migrate

# Com tudo configurado, basta rodarmos nossa aplicação:
python manage.py runserver
```