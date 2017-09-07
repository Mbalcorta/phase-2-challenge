
    When you run a command in the terminal, where does BASH look for that command?
    For execution sequence for an interactive login shell BASH searches through the following files in order:
    /etc/profile
    ~/.profile
    ~/.bash_profile

    For interactive non-login shell:
      ~/.bashrc

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
    Type 'command shift p' then followed by typing panes you get a drop down menu to choose how to split your screen.

    How do you create an alias in your shell?
    For the bash-shell in your home directory type 'vim .bashrc'. Then type 'G' that will take you all the way to the bottom of the file then type alias='value'. Type ':wq' to save a quit file.

    When a terminal command completes, how can you tell if it was successful or not?
    Type the following command 'echo $?'. If command output is zero the command has been run successfully. If the command comes back as a not zero it was not run successfully.

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
    Absolute path starts with a / which is the root of the hard drive. The full path to my home directory would be /Users/mateobalcorta. This tells my computer to go to that specific path regardless of the working directory. Relative path are relative from the working directory and do not start with a /. A relative path in my terminal starting at my home directory would be Users/mateobalcorta.

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
    command b

    What files or folders do you want all git repositories to ignore?
    Files to be ignored are build artifacts and machine generated files such as dependency caches such as /node_modules or /packages, compiled code, build output directories such as /bin, files generated at run time such as .log or .tmp, hidden system files such as .DS_Store, and personal IDE config files.

    What is the main difference between Array.map and Array.forEach in JavaScript?
    Array.map takes in an array and modifies each element in the array and returns the modified array. Array.forEach loops through all the items of an array does not return anything.