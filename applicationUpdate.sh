#!/bin/bash
cd /home/appuser/beautylab;
APPLICATION_PACKAGE="by.havefun.beautylab";
COMMIT=$(git log --pretty=format:'%h' -n 1);
git pull;
COMMIT_NEW=$(git log --pretty=format:'%h' -n 1);
PID=$(ps -ef | grep ${APPLICATION_PACKAGE} | grep -v grep | awk '{ print $2 }')

function buildAndStartApplication {
    rm -rf build;
    ./gradlew bootRepackage;
    ls build/libs;
    java -jar  build/libs/possystem*.jar;
}

if [ "$COMMIT" == "$COMMIT_NEW" ]; then
   echo "Have not updates! :("
       if [ -z "$PID" ]
       then
       		echo "Application start";
       		buildAndStartApplication;
       else
       		echo "Application already ruining!"
       fi
else
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
    buildAndStartApplication;
fi

#sendState
