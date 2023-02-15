#!/bin/bash
#!/bin/bash
if [ "$#" -eq "0" ]
   then
        echo "No arguments supplied"
        exit 1
else
        for var in "$@"
        do
                mkdir "ex$var";
        done
fi
