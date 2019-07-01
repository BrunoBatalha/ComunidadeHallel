create schema if not exists hallel;

drop table if exists matricula;
drop table if exists inscreve;
drop table if exists evento;
drop table if exists cria;
drop table if exists aula;
drop table if exists formacao;
drop table if exists administrador;
drop table if exists usuario;

create table usuario(
	CPF char(11) not null,
    endereco varchar(100) not null,
    telefone varchar(20) not null,
    nome varchar(100) not null,
    email varchar(50) not null,
    dataNasc date not null,
    bairro varchar(50) not null,
    senha varchar(100) not null,
    primary key (CPF));
    
create table administrador(
	nome varchar(100) not null,
    email varchar(100) not null,
    senha varchar(100) not null,
    primary key (nome));
    
create table formacao(
	nome varchar(100) not null,
    nomeAdm varchar(100) not null,
    descricao varchar(300) not null,
    nmrAulas int not null,
    primary key (nome, nomeAdm),
    foreign key (nomeAdm) references administrador(nome));
    
create table aula(
	nome varchar(100) not null,
    nomeForm varchar(100) not null,
    nomeAdm varchar(100) not null,
    duracao time not null,
    videoaula varchar(100) not null,
    capa varchar(100) not null,
    material varchar(100) not null,
    primary key (nome, nomeForm, nomeAdm),
    foreign key (nomeForm) references formacao(nome),
    foreign key (nomeAdm) references administrador(nome));
    
create table cria(
	dataC date not null,
    nomeAdm varchar(100) not null,
    tituloEv varchar(100) not null,
    horaC time not null,
    primary key (dataC, nomeAdm, tituloEv),
    foreign key (nomeAdm) references administrador(nome),
    foreign key (tituloEv) references evento(nome));
            
create table evento(
	titulo varchar(100) not null,
    dataEv date not null,
    descricao varchar(300) not null,
    localEv varchar(100) not null,
    horaEv time not null,
    inscritos int not null,
    primary key(titulo, dataEv));
    
create table inscreve(
	dataInsc date not null,
    CPFUsu char(11) not null,
    tituloEv varchar(100) not null,
    nmrInscricao int not null,
    hora time not null,
    primary key (dataInsc, CPFUsu, tituloEv),
    foreign key (CPFUsu) references usuario(CPF),
    foreign key (tituloEv) references evento(titulo));
    
create table matricula(
	CPFUsu char(11) not null,
    nomeForm varchar(100) not null,
    dataI date not null,
    dataF date null,
    primary key (CPFUsu, nomeForm, dataI),
    foreign key (CPFUsu) references usuario(CPF),
    foreign key (nomeForm) references formacao(nome));