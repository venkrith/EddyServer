# EddyServer
Sample Web Application for Eddy Quicksall

Step-by-step instructions:
--------------------------

**Node**
    -- Install Node.js (version 8.9.0)
    https://nodejs.org/en/download/

**Git Respository**
    --  Setup a project space in GitHub
    1) https://guides.github.com/activities/hello-world/

    --  Download a Windows Git Client (and a GUI, if you prefer)
    https://git-scm.com/download/win

    --  Copy the sample EddyServer from GitHub
    1) Open GitBash (Start -> Program Files ->  Git -> Git Base)
    2) Change directory to your project workspace
    3) Configure your Git profile (one-time)
        git config --global user.email "Eddy@Quicksall.com"
        git config --global user.name "Eddy Quicksall"
    4) Run:
       git clone https://github.com/venkrith/EddyServer.git
       cd EddyServer/
       npm install
       set DEBUG=EddyServer:* && npm run-script devstart
    5) Visit http://localhost:3000 on your favorite browswer
