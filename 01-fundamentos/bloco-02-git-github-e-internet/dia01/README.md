# DIA 1

No dia 1 do bloco 2 realizamos a instalação e configuração do Git, abertura de conta e adição da chave SSH no GitHub. Seguimos com atividades relacionadas aos comandos git.



### Sendo assim, sou capaz de:

* Instalar e configurar o Git no seu computador;

* Salvar seus projetos no repositório Git local;

* Controlar as alterações e versões dos seus arquivos;

* Enviar seus projetos para o repositório remoto do GitHub .


### Por que isso é importante?

Entender como funciona e colocar em prática o Git nos projetos faz parte do dia a dia do desenvolvedor de software. O Git é o mecanismo de controle de versão mais popular atualmente.

Utilizando o Git é possível colaborar de forma assíncrona, ganhando produtividade no momento de "juntar as partes" que cada um fez. Tendo segurança de que todo o trabalho realizado está arquivado.

O GitHub é uma excelente ferramenta para gestão do código, tendo recursos para acompanhamento de _projeto ágil_ de software, controle de Issues, quadros Kanban, Pull Requests, Code Reviews e outras integrações que facilitam o desenvolvimento de software.


### Principais comandos:


```

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

```
