---
title: Setup a production server using Meteor Up
sidebar_label: Setup production server (mup)
---

This page documents the process of setting up a production server for RadGrad based upon [Meteor Up](http://meteor-up.com).

## Setup developer account

To start, you will need to create the ability for multiple developers to manage a single RadGrad installation on this server.  You can do this either via multiple logins, each with sudo access, and a shared directory, or else via a single account whose password is shared amongst developers involved in production.

In this page, we will assume you (or a sysadmin) has created an admin account called "radgrad" that is used by all developers to manage this installation.

## Open ports

Several ports on the server will need to be open:

| Port | Service |
|------|---------|
| 22   | ssh     |
| 443  | https   |
|  80  | web     |
| 19999 | NetData |

## Setup NetData

It is useful to have system load monitoring established for the production server.  One (free) choice is [NetData](https://www.netdata.cloud/).

Follow their instructions to set up a monitor daemon on the production server and "claim" that server in their cloud-based dashboard service.  When you are done, you can easily monitor the load on your server and even set up alerts when various thresholds are crossed. Here's a screen shot illustrating the dashboard:

![](/img/deployment/netdata-dashboard.png)

## Add NOPASSWD

In order for the `mup setup` command to work, you must add NOPASSWD to the sudoers file on the server as documented in [SSH based authentication with sudo](https://github.com/zodern/meteor-up/blob/ee017150591f53f7f85d0a4081a1b6018230e437/README.md#ssh-based-authentication-with-sudo).

## Install mup

Follow the instructions at [http://meteor-up.com/docs.html#installation](http://meteor-up.com/docs.html#installation):

```shell
$ npm install -g mup
```

## Setup mup.js and settings.json

In the app/.deploy directory, there are two template files: mup.sample.js and settings.sample.json.

Copy mup.sample.js to mup.js and settings.sample.js to settings.js:

```shell
$ radgrad2/app/.deploy $ cp mup.sample.js mup.js
$ radgrad2/app/.deploy $ cp settings.sample.json settings.json
```

Both mup.js and settings.json are ignored by git, so you can safely add credentials into those files without fear of them being committed to GitHub.

Edit these two files, adding credentials where necessary.  See Philip if you need credentials.

## Set up server

You can now set up the server following the directions at [http://meteor-up.com/docs.html#setting-up-a-server](http://meteor-up.com/docs.html#setting-up-a-server):

```shell
$ mup setup
```

## Deploy to server

Now you can deploy the current version of RadGrad in your directory to the server following the directions at [http://meteor-up.com/docs.html#deploying-an-app](http://meteor-up.com/docs.html#deploying-an-app):

```shell
$ mup deploy
```

After deployment finishes, the app should be live at [https://radgrad2.ics.hawaii.edu](https://radgrad2.ics.hawaii.edu).

Here's what Docker should show on the production server when deployment succeeds:

```shell
radgrad@radgrad2:~$ docker ps
CONTAINER ID        IMAGE                                    COMMAND                  CREATED             STATUS              PORTS                                      NAMES
aa1d789a85af        mup-radgrad:latest                       "/bin/sh -c 'exec $M…"   19 seconds ago      Up 17 seconds       80/tcp, 3000/tcp                           radgrad
107f0fc6f426        jrcs/letsencrypt-nginx-proxy-companion   "/bin/bash /app/entr…"   8 minutes ago       Up 8 minutes                                                   mup-nginx-proxy-letsencrypt
0031cd1616fb        jwilder/nginx-proxy                      "/app/docker-entrypo…"   8 minutes ago       Up 8 minutes        0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   mup-nginx-proxy
7627b9bca4e2        mongo:3.4.1                              "/entrypoint.sh mong…"   2 hours ago         Up 2 hours          127.0.0.1:27017->27017/tcp                 mongodb
radgrad@radgrad2:~$
```

## Setup Robo3T

A convenient way to inspect the contents of the production database is to use [Robo3T](https://robomongo.org/).

You have the choice of downloading Studio 3T or Robo 3T.  These instructions are for Robo 3T, which is simpler (and free).

After downloading and installing Robo3T, you must create a connection that includes port forwarding to the production MongoDB service.

First, create a new connection and name it appropriately:

![](/img/deployment/robo3t-account-config.png)

Next, set up SSH access to the server running the MongoDB container by clicking on the 'SSH' tab. For example, here is the dialog window for defining ssh access to radgrad2.ics.hawaii.edu:

![](/img/deployment/robo3t-ssh-config.png)

If you have configured things correctly, then after pressing "Save" you'll get this window:

![](/img/deployment/robo3t-connect.png)

And after connecting, you can inspect any collection and document:

![](/img/deployment/robo3t-dashboard.png)




## Setup APM

It is useful to have application performance monitoring.  We hope to be able to use [Monti APM](https://montiapm.com/). Unfortunately, there is a problem with the latest release of the agent, as documented [here](https://github.com/monti-apm/monti-apm-agent/issues/14#issuecomment-701714047). Hopefully that problem will be resolved soon.

Here's what a Monti APM dashboard will look if we can get the bug resolved:

![](/img/deployment/monti-apm-dashboard.png)








