# DIA 1

No dia 1 do bloco 2 realizamos a instalação e configuração do Git, abertura de conta e adição da chave SSH no GitHub. Seguimos com atividades relacionadas aos comandos git.

Principais comandos:

Instalação

sudo apt-get install git-all

	brew install git

Configuração

	git config --global user.name [nome]
git config --global user.email [email]


Verificação de instalação e configuração

	git --version

	git config --list

Geração da chave SSH


ssh-keygen -t rsa -b 4096 -C [email]


Adição da chave SSH ao ao ssh-agent

	eval "$(ssh-agent -s)"

	ssh-add ~/.ssh/id_rsa


Adição da chave SSH na conta GitHub

	cat ~/.ssh/id_rsa.pub


Adição da url ao repositório local

	git remote add origin [url]


Confirmação de adição da url

	git remote -v 


Upload do primeiro commit

	git push origin master













 


