# Linux

### Table of Contents

- [Linux](#linux)
    - [Table of Contents](#table-of-contents)
    - [Linux Commands](#linux-commands)
      - [grep](#grep)
      - [grep options](#grep-options)
      - [cp](#cp)
      - [cp options](#cp-options)
      - [alias](#alias)
      - [alias options](#alias-options)
      - [cat](#cat)
      - [cat options](#cat-options)
      - [rm](#rm)
      - [rm options](#rm-options)
      - [mkdir](#mkdir)
      - [mkdir options](#mkdir-options)
      - [touch](#touch)
      - [touch options](#touch-options)
      - [echo](#echo)
      - [echo options](#echo-options)
      - [wc](#wc)
      - [wc options](#wc-options)
      - [awk](#awk)
      - [awk options](#awk-options)
    - [Wildcards](#wildcards)
    - [Aliases](#aliases)


### Linux Commands

#### grep

`grep`is a command under linux which is user for searching text patterns in files.

        grep [options] pattern [file...]

- `options`: Optional flags that modify the behaviour of the `grep` command.
- `pattern`: The regular expression or string pattern to search for e.g. "help"
- `file...`: Optional arguments specifying the files to search in. If not provided, `grep` reads input from standard input.

#### grep options

| Option   | Description                                     | Example                                     |
|----------|-------------------------------------------------|---------------------------------------------|
| `-c`     | Count the number of matching lines               | `grep -c "pattern" file.txt`                |
| `-i`     | Perform case-insensitive matching                | `grep -i "pattern" file.txt`                |
| `-v`     | Invert the match (select non-matching lines)    | `grep -v "pattern" file.txt`                |
| `-n`     | Show line numbers along with matching lines     | `grep -n "pattern" file.txt`                |
| `-l`     | List only the names of matching files            | `grep -l "pattern" file1.txt file2.txt`      |
| `-r`     | Recursively search directories and subdirectories | `grep -r "pattern" directory/`             |
| `-E`     | Use extended regular expressions                 | `grep -E "pattern" file.txt`                |
| `-F`     | Treat the pattern as a fixed string               | `grep -F "pattern" file.txt`                |
| `-w`     | Match whole words only                           | `grep -w "pattern" file.txt`                |
| `-m <num>`| Stop reading a file after <num> matching lines   | `grep -m 5 "pattern" file.txt`              |
| `-q`     | Suppress output; useful for script usage         | `grep -q "pattern" file.txt`                |
| `--color`| Highlight the matching pattern in output         | `grep --color "pattern" file.txt`           |

#### cp
`cp`is a command under linux which is used to copy files and directories.

- `options`: Optional flags that modify the behaviour of the `cp` command.
- `source`: Specifies the source file or directory of which the `cp` command takes contents from.
- `destination` Specifies the destination file or directory in which the `cp`command put content in.

#### cp options

| Option   | Description                                     | Example                                     |
|----------|-------------------------------------------------|---------------------------------------------|
| `-r`, `-R`  | Copy directories recursively                   | `cp -r sourcedir/ destinationdir/`          |
| `-p`      | Preserve the original file attributes            | `cp -p file.txt backup/`                    |
| `-f`      | Force overwrite existing files without prompt    | `cp -f newfile.txt existingfile.txt`         |
| `-i`      | Prompt before overwriting existing files         | `cp -i file.txt destination/`                |
| `-v`      | Verbose output (display copied file names)       | `cp -v file1.txt file2.txt directory/`       |

#### alias

`alias`is a command under linux which is used to define aliases for commands.

Certainly! Here's a cheat sheet for creating and managing aliases in Linux using the `alias` command, represented in Markdown table format:

The syntax for creating aliases using the `alias` command in Linux is as follows:

```shell
alias <name>=<value>
```

- `<name>`: The name you want to assign to the alias. It can be any valid name without spaces.
- `<value>`: The command or set of commands you want the alias to represent. It can be any valid command or a combination of commands.

Here are a few examples to illustrate the alias syntax:

1. Create an alias named `ll` that executes `ls -l`:
   ```shell
   alias ll="ls -l"
   ```

2. Create an alias named `gs` that executes `git status`:
   ```shell
   alias gs="git status"
   ```

3. Create an alias named `cpv` that executes `cp -v` (verbose copy):
   ```shell
   alias cpv="cp -v"
   ```

4. Create an alias named `d` that executes `docker`:
   ```shell
   alias d="docker"
   ```

#### alias options

| Command               | Description                                               | Example                                             |
|-----------------------|-----------------------------------------------------------|-----------------------------------------------------|
| `alias`               | Lists all defined aliases.                                 | `alias`                                             |
| `alias <name>=<value>` | Creates an alias with the specified name and value.        | `alias ll="ls -l"`                                  |
| `unalias <name>`      | Removes the alias with the specified name.                 | `unalias ll`                                        |
| `alias <name>`        | Displays the definition of the alias with the given name. | `alias ll`                                          |
| `alias <name>=`       | Clears the definition of the alias with the given name.    | `alias ll=`                                         |


Aliases are useful for creating custom shortcuts or abbreviations for frequently used commands. By defining aliases, you can save time and simplify your command-line workflow.

Remember that aliases are typically defined in shell configuration files like `~/.bashrc` or `~/.bash_profile`. After modifying the configuration file, you need to reload it or open a new terminal session for the changes to take effect.

#### cat
The `cat` command concatenates (reads) the contents of a file and prints it to the standard output.

```shell
cat [OPTION]... [FILE]...
```

Here's a breakdown of the syntax elements:

- `cat`: The command itself.
- `[OPTION]...`: Optional flags that modify the behavior of the `cat` command. Flags are prefixed with a dash (`-`).
- `[FILE]...`: Optional file names or paths. You can specify one or more files to display their contents or concatenate them together.

Here are a few examples illustrating the usage of the `cat` command:

1. Display the contents of a single file:
   ```shell
   cat file.txt
   ```

2. Concatenate multiple files and display their contents:
   ```shell
   cat file1.txt file2.txt
   ```

3. Display the contents of a file with line numbers:
   ```shell
   cat -n file.txt
   ```

4. Concatenate multiple files and save the result to a new file:
   ```shell
   cat file1.txt file2.txt > merged.txt
   ```

5. Append the contents of a file to an existing file:
   ```shell
   cat file2.txt >> file1.txt
   ```

#### cat options

| Command      | Description                                            | Example                                          |
|--------------|--------------------------------------------------------|--------------------------------------------------|
| `cat`        | Display the contents of a file                          | `cat file.txt`                                   |
| `cat file1 file2` | Concatenate multiple files and display their contents  | `cat file1.txt file2.txt`                        |
| `cat > file` | Create a new file and enter text (Ctrl+D to save)       | `cat > newfile.txt`                              |
| `cat >> file`| Append text to an existing file (Ctrl+D to save)        | `cat >> existingfile.txt`                        |
| `cat -n`     | Display line numbers with the file contents             | `cat -n file.txt`                                |
| `cat -b`     | Display line numbers with non-empty lines               | `cat -b file.txt`                                |
| `cat -E`     | Display `$` at the end of each line                     | `cat -E file.txt`                                |
| `cat -T`     | Display tabs as `^I`                                    | `cat -T file.txt`                                |
| `cat -s`     | Squeeze multiple blank lines into one                   | `cat -s file.txt`                                |
| `cat -v`     | Display non-printable characters in a visible format    | `cat -v file.txt`                                |


#### rm
The `rm` command in Linux is used to remove/delete files and directories. The basic syntax of the `rm` command is:

```shell
rm [OPTION]... FILE...
```

Here's a breakdown of the syntax elements:

- `rm`: The command itself.
- `[OPTION]...`: Optional flags that modify the behavior of the `rm` command. Flags are prefixed with a dash (`-`).
- `FILE...`: One or more file names or paths specifying the files or directories to be removed.

Here are a few examples illustrating the usage of the `rm` command:

1. Remove a single file:
   ```shell
   rm file.txt
   ```

2. Remove multiple files:
   ```shell
   rm file1.txt file2.txt
   ```

3. Remove a directory and its contents recursively:
   ```shell
   rm -r directory/
   ```

4. Forcefully remove a file without prompt:
   ```shell
   rm -f file.txt
   ```

5. Prompt for confirmation before removing a file:
   ```shell
   rm -i file.txt
   ```

6. Remove a directory and its contents forcefully and recursively:
   ```shell
   rm -rf directory/
   ```

#### rm options

| Command               | Description                                               | Example                                              |
|-----------------------|-----------------------------------------------------------|------------------------------------------------------|
| `rm <file>`           | Delete a file                                              | `rm file.txt`                                        |
| `rm -r <directory>`   | Delete a directory and its contents recursively            | `rm -r directory/`                                   |
| `rm -f <file>`        | Forcefully delete a file without prompt                    | `rm -f file.txt`                                     |
| `rm -i <file>`        | Prompt for confirmation before deleting a file             | `rm -i file.txt`                                     |
| `rm -rf <directory>`  | Forcefully delete a directory and its contents recursively | `rm -rf directory/`                                  |
| `rm -d <directory>`   | Delete an empty directory                                  | `rm -d emptydir/`                                    |
| `rm -v <file>`        | Display verbose output (show deleted files)                | `rm -v file.txt`                                     |
| `rm --help`           | Display help information about the `rm` command            | `rm --help`                                         |

These are some common options and commands for the `rm` command. Please note that the `-f` (force) and `-r` (recursive) options should be used with caution as they can permanently delete files and directories without further confirmation.

Remember to exercise caution when using the `rm` command as deleted files cannot be easily recovered. Always double-check your commands and ensure you're deleting the intended files or directories.

Additionally, the behavior of the `rm` command can vary slightly depending on the operating system and version. It's recommended to refer to the command's manual (`man rm`) for more detailed information and options specific to your environment.

#### mkdir
The `mkdir` command in Linux is used to create directories (folders). The basic syntax of the `mkdir` command is:

```shell
mkdir [OPTION]... DIRECTORY...
```

Here's a breakdown of the syntax elements:

- `mkdir`: The command itself.
- `[OPTION]...`: Optional flags that modify the behavior of the `mkdir` command. Flags are prefixed with a dash (`-`).
- `DIRECTORY...`: One or more directory names or paths specifying the directories to be created.

Here are a few examples illustrating the usage of the `mkdir` command:

1. Create a single directory:
   ```shell
   mkdir directory_name
   ```

2. Create multiple directories at once:
   ```shell
   mkdir dir1 dir2 dir3
   ```

3. Create a directory with specific permissions (mode):
   ```shell
   mkdir -m 755 directory_name
   ```

4. Create nested directories (with parent directories if they don't exist):
   ```shell
   mkdir -p path/to/directory
   ```

5. Create directories with verbose output:
   ```shell
   mkdir -v dir1 dir2 dir3
   ```

#### mkdir options

| Option         | Description                                                                                                    | Example                                    |
|----------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| `-m, --mode=MODE` | Set the file mode (permissions) of the created directory to `MODE` (in octal).                                      | `mkdir -m 755 directory_name`              |
| `-p, --parents`  | Create any necessary parent directories. If they already exist, no error is reported.                            | `mkdir -p path/to/directory`              |
| `-v, --verbose`  | Print a message for each created directory.                                                                     | `mkdir -v dir1 dir2 dir3`                  |
| `-Z, --context[=CTX]` | Set the SELinux security context of each created directory to `CTX`. If `CTX` is not specified, the default context is used. | `mkdir -Z httpd_sys_content_t /var/www` |

#### touch
The `touch` command in Linux is used to create new files or update the timestamps (access time and modification time) of existing files. The basic syntax of the `touch` command is:

```shell
touch [OPTION]... FILE...
```

Here's a breakdown of the syntax elements:

- `touch`: The command itself.
- `[OPTION]...`: Optional flags that modify the behavior of the `touch` command. Flags are prefixed with a dash (`-`).
- `FILE...`: One or more file names or paths specifying the files to be created or updated.

Here are a few examples illustrating the usage of the `touch` command:

1. Create a new file:
   ```shell
   touch file.txt
   ```

2. Create multiple files at once:
   ```shell
   touch file1.txt file2.txt file3.txt
   ```

3. Update the timestamps of an existing file:
   ```shell
   touch existing_file.txt
   ```

4. Set specific timestamps for a file:
   ```shell
   touch -t 202201011200 file.txt
   ```

5. Update the timestamps of a file using another file as reference:
   ```shell
   touch -r reference_file.txt target_file.txt
   ```

#### touch options
Here's a Markdown table representing the options for the `touch` command:

| Option       | Description                                                  | Example                                 |
|--------------|--------------------------------------------------------------|-----------------------------------------|
| `-a`         | Change only the access time                                   | `touch -a file.txt`                     |
| `-c`         | Do not create a new file if it doesn't exist                 | `touch -c file.txt`                     |
| `-d`         | Set the access and modification time to the specified value   | `touch -d "2022-01-01" file.txt`        |
| `-m`         | Change only the modification time                             | `touch -m file.txt`                     |
| `-r <file>`  | Use the timestamp of `<file>` for the new file                | `touch -r original.txt new.txt`         |
| `-t <time>`  | Set the access and modification time using `<time>`           | `touch -t 202201011200 file.txt`        |
| `-h`         | Change the timestamps of symbolic links instead of the target | `touch -h link.txt`                     |
| `--help`     | Display help information about the `touch` command            | `touch --help`                          |

These options provide various ways to modify the timestamps (access time and modification time) of files using the `touch` command. You can use these options to set specific timestamps, change individual timestamps, or reference timestamps from other files.

#### echo
The `echo` command in Linux is used to display text or variables on the terminal. The basic syntax of the `echo` command is:

```shell
echo [OPTION]... [STRING]...
```

Here's a breakdown of the syntax elements:

- `echo`: The command itself.
- `[OPTION]...`: Optional flags that modify the behavior of the `echo` command. Flags are prefixed with a dash (`-`).
- `[STRING]...`: Optional strings or variables to be displayed on the terminal. These can be enclosed in quotes for multiple words or containing special characters.

Here are a few examples illustrating the usage of the `echo` command:

1. Display a simple string:
   ```shell
   echo "Hello, World!"
   ```

2. Display the value of a variable:
   ```shell
   name="John"
   echo "My name is $name"
   ```

3. Display multiple strings:
   ```shell
   echo "Hello," "World!"
   ```

4. Display strings without a trailing newline:
   ```shell
   echo -n "This is a "
   echo "sentence."
   ```

5. Interpret and display escape sequences:
   ```shell
   echo -e "This is\ttabbed text"
   ```

#### echo options

| Option     | Description                                                | Example                                             |
|------------|------------------------------------------------------------|-----------------------------------------------------|
| `-n`       | Suppresses the trailing newline character                  | `echo -n "Hello, World!"`                           |
| `-e`       | Enables the interpretation of escape sequences              | `echo -e "Line 1\nLine 2"`                          |
| `-E`       | Disables the interpretation of escape sequences (default)   | `echo -E "Line 1\nLine 2"`                          |
| `-s`       | Suppresses the echo command itself from being displayed     | `echo -s "This will not be displayed"`               |
| `--help`   | Displays help information about the `echo` command          | `echo --help`                                       |
| `--version`| Displays the version information of the `echo` command      | `echo --version`                                    |

#### wc
Under linux the `wc` command is used to count the number of lines, wordsm and characters in a file or the output of a command. `wc` stands for `word count`.

        wc [options] [file]

- `options` Optional flags that modify the behaviour of the `wc` command
- `file` Optional argument specifying the file to be analyzed. If not provided, `wc` reads input from standard input.

The `wc` command provides three types of counts:

1. Line count `-l` option: It displays the number of lines in the given file or input.
2. Word count `-w` option: It shows the number of words in the given file or input. A word is defined as a contiguous sequence of characters separated by whitespace.
3. Character count `-c` option: It gives the number of characters in the given file or input. This count includes spaces, tabs, and newlines.

A few examples:

1. Count the numbers of lines, words, and characters in a file:
        
        wc filename.txt

2. Count only the number of lines in a file:

        wc -l filename.txt

3. Count the number of words in the output of a command (piped out):

        cat filename.txt | wc -w

4. Count the number of characters in a file:
   
        wc -c filename.txt
#### wc options

| Option       | Description                                                    | Example                                    |
|--------------|----------------------------------------------------------------|--------------------------------------------|
| `-l`         | Count the number of lines                                      | `wc -l file.txt`                           |
| `-w`         | Count the number of words                                      | `wc -w file.txt`                           |
| `-c`         | Count the number of characters                                 | `wc -c file.txt`                           |
| `-m`         | Count the number of characters (including multibyte characters) | `wc -m file.txt`                           |
| `-L`         | Find the length of the longest line                            | `wc -L file.txt`                           |
| `--help`     | Display help information about the `wc` command                | `wc --help`                                |
| `--version`  | Display the version information of the `wc` command            | `wc --version`                             |

These options allow you to customize the output of the `wc` command and obtain specific information about the input file or stream. You can count lines, words, characters (bytes), or multibyte characters, as well as find the length of the longest line.

It's important to note that the `wc` command can accept multiple files as arguments, and it will provide separate counts for each file as well as a cumulative count for all files combined.
#### awk
The `awk` command in Linux is a versatile text-processing tool used to extract and manipulate data from text files. The basic syntax of the `awk` command is:

```shell
awk 'pattern { action }' [file]
```

Here's a breakdown of the syntax elements:

- `awk`: The command itself.
- `'pattern { action }'`: The pattern-action pairs enclosed in single quotes. The pattern determines which lines to process, and the action specifies the action to perform on those lines.
- `[file]`: Optional file name or path specifying the input file. If not provided, `awk` reads from standard input (e.g., piped input).

Here are a few examples illustrating the usage of the `awk` command:

1. Print all lines in a file:
   ```shell
   awk '{ print }' file.txt
   ```

2. Print the first column of each line:
   ```shell
   awk '{ print $1 }' file.txt
   ```

3. Print lines where the second column is equal to a specific value:
   ```shell
   awk '$2 == "value" { print }' file.txt
   ```

4. Calculate and print the sum of numbers in a column:
   ```shell
   awk '{ sum += $1 } END { print sum }' file.txt
   ```

5. Print lines with a specific pattern and perform custom actions:
   ```shell
   awk '/pattern/ { print "Found:", $0 }' file.txt
   ```

#### awk options

| Option       | Description                                                       | Example                                                                 |
|--------------|-------------------------------------------------------------------|-------------------------------------------------------------------------|
| `-F <value>` | Specifies the input field separator                                | `awk -F ',' '{print $1}' file.csv`                                       |
| `-v <var=value>` | Sets the value of a variable                                     | `awk -v num=10 '{print $1 + num}' file.txt`                               |
| `-f <file>`  | Specifies a file containing the awk script                        | `awk -f script.awk file.txt`                                             |
| `BEGIN{}`    | Executes actions before processing the input                       | `awk 'BEGIN{print "Start"} {print $0}' file.txt`                          |
| `END{}`      | Executes actions after processing the input                        | `awk '{sum += $1} END{print "Total:", sum}' file.txt`                     |
| `NR`         | Represents the current record number                               | `awk '{print NR, $0}' file.txt`                                           |
| `NF`         | Represents the number of fields in the current record              | `awk '{print NF, $0}' file.txt`                                           |
| `/pattern/`  | Matches lines that contain the specified pattern                    | `awk '/keyword/ {print $0}' file.txt`                                    |
| `{print}`    | Prints the entire record or selected fields                        | `awk '{print $1, $3}' file.txt`                                           |
| `if(){} else{}` | Conditional statement to perform actions based on a condition     | `awk '{if ($1 > 10) print "High"; else print "Low"}' file.txt`            |
| `length()`   | Returns the length of a string or field                            | `awk '{if (length($1) > 5) print $0}' file.txt`                           |

### Wildcards

| Wildcard | Description                                              | Example                                  |
|----------|----------------------------------------------------------|------------------------------------------|
| `*`      | Matches any sequence of characters (including none)       | `ls *.txt` - matches all files ending with `.txt` |
| `?`      | Matches any single character                              | `ls file?.txt` - matches `file1.txt`, `file2.txt`, etc. |
| `[ ]`    | Matches any single character within the specified range   | `ls file[1-3].txt` - matches `file1.txt`, `file2.txt`, `file3.txt` |
| `[! ]`   | Matches any single character not within the specified range | `ls file[!1-3].txt` - matches any file except `file1.txt`, `file2.txt`, `file3.txt` |
| `{ }`    | Expands a sequence of comma-separated values              | `cp file{1,2,3}.txt destination/` - copies `file1.txt`, `file2.txt`, `file3.txt` to the `destination/` directory |

Here are some examples to illustrate the usage of wildcards:

1. List all files with the `.txt` extension:
   ```shell
   ls *.txt
   ```

2. Remove all files starting with `backup` and ending with `.bak`:
   ```shell
   rm backup*.bak
   ```

3. Copy all files with a single character name and `.txt` extension to a directory:
   ```shell
   cp ?*.txt destination/
   ```

4. Find files with names that match a specific pattern:
   ```shell
   find . -name "prefix*suffix"
   ```

5. Move files with names containing a range of numbers:
   ```shell
   mv file[1-5].txt destination/
   ```

### Aliases
Aliases are shortcuts to commonly used commands. To define an alias, use the `alias` command.

| Command                    | Description                                                    | Example                                                       |
|----------------------------|----------------------------------------------------------------|---------------------------------------------------------------|
| `alias`                    | Displays a list of currently defined aliases                    | `alias`                                                       |
| `alias name=value`         | Creates an alias with the specified name and value              | `alias ll='ls -al'`                                           |
| `unalias name`             | Removes the alias with the specified name                       | `unalias ll`                                                  |
| `alias name`               | Displays the definition of the alias with the specified name    | `alias ll`                                                    |
| `alias name=new_value`     | Modifies the value of an existing alias                         | `alias ll='ls -lh'`                                           |
| `alias -p` or `alias --p`  | Displays a list of all defined aliases in a format that can be reused in a shell script | `alias -p`                                  |

Here are some examples of commonly used aliases:

1. Shorten a frequently used command:
   ```shell
   alias ll='ls -al'
   ```

2. Create an alias with command options:
   ```shell
   alias grep='grep --color=auto'
   ```

3. Create an alias to navigate to a specific directory:
   ```shell
   alias mydocs='cd ~/Documents'
   ```

4. Define an alias with multiple commands:
   ```shell
   alias update='sudo apt update && sudo apt upgrade'
   ```

5. Combine an alias with command arguments:
   ```shell
   alias duh='du -sh'
   ```

Aliases can significantly enhance your productivity by allowing you to create custom shortcuts or modify the behavior of existing commands. However, please note that aliases are specific to the current shell session and are not permanent. If you want to make an alias permanent, you can add it to your shell configuration file, such as `.bashrc` or `.zshrc`.

 