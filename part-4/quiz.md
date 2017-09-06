
    When you run a command in the terminal, where does BASH look for that command?


    On a UNIX computer, how do you stop a running process?
    Type 'top' command to see a list of all running processes. Then find the PID number of the process. To kill the signal type 'kill -9 -<pid>' command.

    What packages do you have installed via homebrew?
    brew list

    On a UNIX computer, how do you find the process id of a running process?
    Type 'top' command, the PID of the process will be located at the left right under PID column.

    In a terminal, what does control-c do?
    control-c sends a SIGINT to all the processes in the foreground process group. It would be the equivalent of doing kill -SIGINIT -<pid>

    What would be the result of typing the following commands?

    $ cd /Users/steve
    $ mkdir foo
    $ touch bar
    $ cd foo
    $ touch bar
    $ pwd

    /Users/steve/foo/

    How do you set an environment variable in your shell?
    type your variable in all upperCased letters and assign it to a string value. Example: KEY='value'

    What keyboard shortcut do you use to split the screen in your editor?

    How do you create an alias in your shell?
    For the bash-shell in your home directory type 'vim .bashrc'. Then type 'G' that will take you all the way to the bottom of the file then type alias='value'. Type ':wq' to save a quit file.

    When a terminal command completes, how can you tell if it was successful or not?
    echo $?
    If command output is zero the command has been run successfully. If the command comes back as a not zero it was not run successfully.

    What does your ~/.gitconfig have in it? (paste the whole file here)
    [alias]
      co = checkout
      ci = commit
      st = status --short --branch
      l  = log --oneline --decorate --graph --relative-date --show-signature
      ls-untracked-files = !git-ls-files -o --exclude-standard
      ls-ignored-files = !git-ls-files --others -i --exclude-standard
      ls-modified-files = !git-ls-files -m
      pom = push origin master
    [color]
      status = auto
      diff = auto
      branch = auto
      interactive = auto
      ui = auto
      pager = true
    [color "status"]
      added = green
      changed = yellow
      untracked = red
    [user]
      name = Mateo Balcorta
      email = misterrattail@gmail.com
    [web]
      browser = google-chrome
    [core]
      editor = atom
      excludesfile = ~/.gitignore
      autocrlf = false
      pager = less -F -X
      whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
    [apply]
      whitespace = fix
    [push]
      default = upstream
    [branch]
      autosetuprebase = always
      autosetupmerge = true
      [mergetool "diffmerge"]
      cmd = diffmerge --merge --result=$MERGED $LOCAL $BASE $REMOTE
      trustExitCode = false
    [rebase]
      autosquash = true
    [rerere]
      enabled = true
      autoupdate = true
    [help]
      autocorrect = 50

    What is the difference between a relative and absolute path?

    Lets say you have the following file structure

    ~
    └── Projects
        ├── pinterest-for-dogs
        │   └── package.json
        └── linkedin-for-dancers
            ├── README.md
            └── package.json

    And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?
    cp README.md ../pinterest-for-dogs

    What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

    What files or folders do you want all git repositories to ignore?

    What is the main difference between Array.map and Array.forEach in JavaScript?