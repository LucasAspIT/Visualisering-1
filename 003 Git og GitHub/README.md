# Modul 1: Oprette git repository

I dette modul bliver du introduceret til git og prøver at oprette et repository på din computer. Inden du starter modulet skal du have [installeret og sat git op](https://github.com/Visualisering-DK/github/blob/master/README.md#for-at-komme-igang).

Du vil efter modulet have kendskab til følgende git kommandoer:
* `init`
* `add`
* `commit`
* `status`
* `log`

## Oprette et git repository
For at oprette et lokalt repository bruges kommandoen `git init`. 
```bash
$ git init
Initialized empty Git repository in C:/Users/kljo/Code/test/.git/
```

## The Three Stages of Git

Filer i et repository går gennem tre stadier før de bliver versionsstyret med git.

* Untracked: Filen eksisterer, men er ikke en del af gits versionsstyrring
* Staged: Filen er blevet tilføjet til gits versionsstyring, men ændringer er ikke committed
* Committed: Ændringerne er blevet committed og git holder styr på hvordan filen så ud på dette tidspunkt

Hvis der oprettes en ny fil i et repository så er den i untracked stadiet. 
```bash
$ touch README.md
$ git status
On branch master

Untracked files:
  (use "git add <file>..." to include in what will be committed)   
        README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

For at stage filen til en commit. Altså flytte den eller flere filer til staging area, bruges kommandoen `git add`. Sørg for at stage filer i logiske "klumper", fx de filer der er ændret i forbindelse med en ny feature eller en bug fix
```bash
$ git add README.md index.html
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
        new file:   index.html
```
Det sidste stadie er når du endeligt har commited dig til en ændring med en god beskrivende besked. 

Det er vigtigt med gode beskeder, så andre kan følge med i hvad der bliver lavet og hvordan, og senere forstå hvilken hensigt der var med noget kode. 

[Du kan læse mere om at skrive gode commit beskeder i denne guide](https://chris.beams.io/posts/git-commit/)


## Remote repository og Stash

Der findes også to andre stadier filer kan være i. 

* Remote repository: ....fx det repository der er på GitHub
* Stash: Hvis der er ændringer siden sidste commit, som du endnu ikke er klar til at committe til, så kan de flyttes ind til stash. Hvis du har været i gang med en ny feature og har behov for at gemme dine ændringer og gå tilbage til et lokalt repository som det så ud ved sidste commit. Fx hvis du skal rette en bug og ikke vil have alle dine andre ændringer med.

Du kan lege rundt med dette [interaktive git cheat sheet fra NPD Software](https://ndpsoftware.com/git-cheatsheet.html) og få definitioner på de forskellige stages og kommandoer der bruges. 
