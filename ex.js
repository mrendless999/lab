IMPLEMENTATION OF UNIX SYSTEM CALLS DATE
 
 
 
DESCRIPTION:
 
When a computer is turned on, the program that gets executed first is called the “operating system”. It controls pretty much all activity in the computer. This includes who logsin, how disks are used, how memory is used, how the CPU is used, and how you talk with othercomputers. The operating system we use is called "Unix".
The way that programs talk to the operating system is via ``system calls.'' A system call looks like a procedure call but it's different -- it is a request to the operating system to perform some activity.
⦁	fork( )
Fork system call used for creating a new process, which is called child process, which runs concurrently with a process (which process called system call fork) and this process is called parent process. It takes no parameters and returns an integer value.
Negative Value: creation of a child process was unsuccessful.
Zero: Returned to the newly created child process.
Positive value: Returned to parent or caller. The value contains process ID of newly created child process
Syntax: fork( )
 
⦁	wait( )
A call to wait() blocks the calling process until one of its child processes exits or a signal is received. After the child process terminates, the parent continues its execution after the wait system call instruction.
Syntax: wait( NULL)
 
⦁	exit( )
A process terminates when it finishes executing its final statement and asks the operating system to delete it by using the exit system call. At that point, the process may return data (output) to its parent process (via the wait system call).

Syntax: exit(0)
 
⦁	getpid( )
It returns the process ID of the current process.
Syntax : getpid()
 
⦁	getppid( )
It returns the process ID of the parent of the current process.
Syntax : getppid()
 
⦁	perror( )
Indicate the process error.
Syntax : perror()
 
⦁	opendir( ) Open a directory. Syntax : opendir()
 
⦁	readdir( ) Read a directory. Syntax : readdir()
 
⦁	closedir() Close a directory. Syntax : closedir()
 
⦁	open()
It is used to open a file for reading, writing or both Syntax : open( const char* path, int flags [, int mode ] ) Modes
O_RDONLY: read only, O_WRONLY: write only, O_RDWR: read and write, O_CREAT: create file if it doesn‟t exist, O_EXCL: prevent creation if it already exists.
Example:
int fd = open("foo.txt", O_RDONLY | O_CREAT); printf("fd = %d/n", fd);
 
⦁	close ()
Tell the operating system you are done with a file descriptor and Close the file which is pointed by fd.
Syntax: close(fd);

 
⦁	read ()
The file indicated by the file descriptor fd, the read() function reads cnt bytes of input into the memory area indicated by buf. To read data from is said to be buf. A successful read() updates the access time for the file.
fd: file descriptor
buf: buffer to read data from
cnt: length of buffer
Syntax: read(int fd, void* buf,size_t cnt); Example:
int fd = open("foo.txt", O_RDONLY); read(fd, &c, 1);
 
⦁	Write()
Writes cnt bytes from buf to the file or socket associated with fd. cnt should not be greater than INT_MAX (defined in the limits.h header file). If cnt is zero, write() simply returns 0 without attempting any other action.
Syntax : write(int fd, void* buf, size_t cnt); Example:
int fd = open("foo.txt", O_WRONLY | O_CREAT ); write(fd, "hello world", strlen("hello world"));
 
 
PROGRAMS
⦁	Implementation of process management using the following system calls of the UNIX operating system: fork, wait, exec, getpid, getppid and exit.
 
AIM: To implement the process management system call commands of fork, wait, exec, getpid, getppid and exit.
ALGORITHM:
STEP1: Declare the variable.
STEP2: Assign value to the variable by calling the function fork().
STEP3: Check if the variable is lesser than 0 and print Error.
STEP4: Else check if the variable is equal to 0 and print getpid() and getppid() and exit.
STEP5: Else call wait() function with NULL parameter, then print getpid().
PROGRAM:

	 
 

  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
OUTPUT:

  
 
⦁	Implementation of directory management using the following system calls of the UNIX operating system: opendir, readdir, closedir.
AIM:
To implement the directory management using unix system calls of open,close and read directories.
 
ALGORITHM:
STEP1: Declare pointers dirp and dp.
STEP2: Check if drip is NULL and print can‟t open the file.
STEP3: Set a for loop until dp is not NULL.
STEP4: Check dp and print the name pointed by the pointer dp.

STEP5: Close directory dirp.

	 
PROGRAM:
 

	 
OUTPUT:
 
⦁	Write a program using the I/O system calls of UNIX operating system: open, read, write, close.

AIM:
To implement the program using input and output system calls of unix operating system.
 
ALGORITHM:
STEP1: Declare variables n, fd and an array buff with size 25.
STEP2: Get text from the user and assign it to variable n.
STEP3: Open the text file on the variable fd.
STEP4: Write the text got from the user at the file opened at variable fd.
STEP5: Close the file opened at fd.

	 
PROGRAM:
OUTPUT:

 
 
 
 
 
 
 
 
 
 
 
 
 
 
RESULT:
The above program has been executed and output has been verified.

			IMPLEMENTATION OF FILE ORGANIZATION TECHNIQUES 
a. Single level directory AIM:
To write a C program to implement File Organization concept using the technique Single level directory.
ALGORITHM:
Step-1: Start the program.
Step-2: Declare the count, file name, graphical interface. Step-3: Read the number of files
Step-4: Read the file name
Step-5: Declare the root directory
Step-6: Using the file eclipse function define the files in a single level Step-7: Display the files
Step-8: Stop the program
PROGRAM:
#include<stdlib.h> #include<string.h> #include<stdio.h> struct
{
char dname[10],fname[10][10]; int fcnt;
}dir;
 
void main()
 
{
int i,ch; char f[30]; dir.fcnt = 0;

printf("\nEnter name of directory : "); scanf("%s", dir.dname);
while(1)
 
{
 
printf("\n\n1. Create File\t2. Delete File\t3. Search File \n 4. Display Files\t5. Exit\nEnter your choice : ");
scanf("%d",&ch); switch(ch)
{
 
case 1: printf("\nEnter the name of the file : "); scanf("%s",dir.fname[dir.fcnt]);
dir.fcnt++; break;
case 2: printf("\nEnter the name of the file : "); scanf("%s",f);
for(i=0;i<dir.fcnt;i++)
 
{
 
if(strcmp(f, dir.fname[i])==0)
 
{
 
printf(" %s is deleted ",f);
strcpy(dir.fname[i],dir.fname[dir.fcnt-1]); break; } } if(i==dir.fcnt) printf(" %s not found",f);
else dir.fcnt--; break; case 3:
printf("\nEnter the name of the file to search : "); scanf("%s",f);

for(i=0;i<dir.fcnt;i++)
{
 
if(strcmp(f, dir.fname[i])==0)
 
{
 
printf(" %s is found ", f); break;
}
 
}
 
if(i==dir.fcnt)
 
printf(" %s not found",f); break;
case 4: if(dir.fcnt==0)
printf("\nDirectory Empty"); else
{
printf("\nThe Files are : "); for(i=0;i<dir.fcnt;i++)
printf("%s\n",dir.fname[i]);
}
 
break;
 
default: exit(0);
 
}
 
}
 
}
 
OUTPUT:

 
 
RESULT:
Thus the program has been executed successfully.
 
B. Implementation Of Two Level Directory In File Organization Techniques

AIM:
 
To write a C program to implement File Organization concept using the technique Two
Level Directory.
 
ALGORITHM:
Step-1: Start the program.
Step-2: Declare the count, file name, graphical interface. Step-3: Read the number of files
Step-4: Read the file name
Step-5: Declare the root directory
Step-6: Using the file eclipse function define the files in a single level Step-7: Display the files
Step-8: Stop the program
PROGRAM:
#include<string.h> #include<stdlib.h> #include<stdio.h> struct
{
char dname[10],fname[10][10]; int fcnt;
}dir[10]; void main()
{
int i,ch,dcnt,k; char f[30], d[30]; dcnt=0;
while(1)
{
printf("\n\n1. Create Directory\t2. Create File\t3. Delete File"); printf("\n4. Search File\t\t5. Display\t6. Exit\nEnter your choice : "); scanf("%d",&ch);

switch(ch)
{
case 1: printf("\nEnter name of directory : ");
scanf("%s", dir[dcnt].dname); dir[dcnt].fcnt=0;
dcnt++;
printf("Directory created"); break;
case 2: printf("\nEnter name of the directory : "); scanf("%s",d);
for(i=0;i<dcnt;i++) if(strcmp(d,dir[i].dname)==0)
{
printf("Enter name of the file : "); scanf("%s",dir[i].fname[dir[i].fcnt]); printf("File created");
break;
}
if(i==dcnt)
printf("Directory %s not found",d); break;
case 3: printf("\nEnter name of the directory : "); scanf("%s",d);
for(i=0;i<dcnt;i++)
{
if(strcmp(d,dir[i].dname)==0)
{
printf("Enter name of the file : "); scanf("%s",f); for(k=0;k<dir[i].fcnt;k++)

{
if(strcmp(f, dir[i].fname[k])==0)
{
printf("File %s is deleted ",f); dir[i].fcnt--;
strcpy(dir[i].fname[k],dir[i].fname[dir[i].fcnt]); goto jmp;
}
}
printf("File %s not found",f); goto jmp;
}
}
printf("Directory %s not found",d); jmp : break;
case 4: printf("\nEnter name of the directory : "); scanf("%s",d);
for(i=0;i<dcnt;i++)
{
if(strcmp(d,dir[i].dname)==0)
{
printf("Enter the name of the file : "); scanf("%s",f); for(k=0;k<dir[i].fcnt;k++)
{
if(strcmp(f, dir[i].fname[k])==0)
{
printf("File %s is found ",f); goto jmp1;
}
}

printf("File %s not found",f); goto jmp1;
}
}
printf("Directory %s not found",d); jmp1: break;
case 5: if(dcnt==0) printf("\nNo Directory's "); else
{
printf("\nDirectory\tFiles"); for(i=0;i<dcnt;i++)
{
printf("\n%s\t\t",dir[i].dname); for(k=0;k<dir[i].fcnt;k++) printf("\t%s",dir[i].fname[k]); }
}
break; default:exit(0);
}
}
}
OUTPUT:

 
RESULT:
Thus the program has been executed successfully.

