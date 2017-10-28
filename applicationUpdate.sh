#!/bin/bash
cd /home/appuser/beautylab;

COMMIT=$(git log --pretty=format:'%h' -n 1);
git pull;
COMMIT_NEW=$(git log --pretty=format:'%h' -n 1);

if [ "$COMMIT" == "$COMMIT_NEW" ]; then
   echo "Have not updates! :("
   PID=$(ps -ef | grep "by.havefun.beautylab" | grep -v grep | awk '{ print $2 }')
       if [ -z "$PID" ]
       then
       		echo "Application start";
       		./gradlew bootRun
       else
       		echo "Application already ruining!"
       fi
else

	#stop
    PID=$(ps -ef | grep "by.havefun.beautylab" | grep -v grep | awk '{ print $2 }')
    if [ -z "$PID" ]
    then
        echo "Application is already stopped"
    else
        kill $PID
        echo "Application killed"
    fi

    #backup
    #FILE_NAME="beautylab-"$(date +%Y)-$(date +%m)-$(date +%d)_$(date +%H)-$(date +%M)-$(date +%S)".sql";
    #mysqldump -u andreiuser -pQX3M6IbCMCL andrei >> /backup/beautylab/$FILE_NAME

	#run
	echo "Application start";
    ./gradlew bootRun
fi

#sendState
