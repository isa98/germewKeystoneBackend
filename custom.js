[Service]
#ExecStart=/usr/include/node /home/isa/AllReactProjects/Keystone/Germew/GMW/index.js
ExecStart=/home/isa/AllReactProjects/Keystone/Germew/GMW/custom.js
#WorkingDirectory=
Restart=always
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=isa       
User=isa           
#Group=wheel          
#Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target

