import { CheatSheet } from '../../types';

export const serversCheatSheets: CheatSheet[] = [
  {
    id: 'servers-1',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Manage systemd Services',
    snippet: `sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl status nginx
sudo systemctl enable nginx`,
    description: '`systemd` is the standard service manager on most Linux distributions. Use `systemctl` to start, stop, restart, check the status of, and enable services to run on boot.',
    tags: ['servers', 'linux', 'systemd', 'systemctl', 'service', 'admin'],
  },
  {
    id: 'servers-2',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Manage Nginx Web Server',
    snippet: `sudo nginx -t
sudo systemctl reload nginx`,
    description: '`nginx -t` tests your Nginx configuration files for syntax errors before you apply them. `systemctl reload` gracefully reloads the configuration without dropping connections.',
    tags: ['servers', 'nginx', 'web server', 'config', 'reload'],
  },
  {
    id: 'servers-3',
    category: 'Servers',
    subCategory: 'nginx',
    title: 'Basic Nginx Server Block',
    snippet: `server {
    listen 80;
    server_name example.com www.example.com;

    root /var/www/example.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}`,
    description: 'A basic Nginx configuration (server block) to serve a static website for `example.com` from the `/var/www/example.com` directory.',
    tags: ['servers', 'nginx', 'config', 'server block', 'virtual host', 'static'],
  },
  {
    id: 'servers-4',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Manage Apache2 Web Server',
    snippet: `sudo apache2ctl configtest
sudo systemctl reload apache2`,
    description: '`apache2ctl configtest` checks the syntax of your Apache configuration files. `systemctl reload` gracefully reloads the configuration.',
    tags: ['servers', 'apache', 'web server', 'config', 'reload'],
  },
  {
    id: 'servers-5',
    category: 'Servers',
    subCategory: 'apache',
    title: 'Basic Apache Virtual Host',
    snippet: `<VirtualHost *:80>
    ServerName www.example.com
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html

    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>`,
    description: 'A basic Apache Virtual Host configuration, allowing you to host multiple websites on a single server. This file would typically be in `/etc/apache2/sites-available/`.',
    tags: ['servers', 'apache', 'config', 'virtual host', 'static'],
  },
  {
    id: 'servers-6',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Manage Firewall with UFW',
    snippet: `sudo ufw status
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw deny 25/tcp`,
    description: 'UFW (Uncomplicated Firewall) is a user-friendly frontend for managing iptables. These commands check status, enable the firewall, and allow or deny traffic on specific ports.',
    tags: ['servers', 'linux', 'firewall', 'ufw', 'security', 'networking'],
  },
  {
    id: 'servers-7',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Monitor System Processes',
    snippet: `top
htop`,
    description: '`top` displays a real-time view of running processes in Linux. `htop` is an interactive process viewer that offers a more user-friendly interface with color, scrolling, and more.',
    tags: ['servers', 'linux', 'monitoring', 'processes', 'top', 'htop', 'performance'],
  },
  {
    id: 'servers-8',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Check Memory Usage',
    snippet: 'free -h',
    description: 'Displays the total amount of free and used physical and swap memory in the system. The `-h` flag makes the output human-readable (e.g., in MB or GB).',
    tags: ['servers', 'linux', 'monitoring', 'memory', 'free', 'performance'],
  },
  {
    id: 'servers-9',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Get SSL Certificate with Certbot',
    snippet: 'sudo certbot --nginx -d example.com -d www.example.com',
    description: 'Certbot is a free, automated tool from Let\'s Encrypt that simplifies the process of obtaining and installing SSL/TLS certificates. This command will get a certificate for the specified domains and automatically configure Nginx.',
    tags: ['servers', 'ssl', 'tls', 'https', 'certbot', 'letsencrypt', 'security', 'nginx'],
  },
  {
    id: 'servers-10',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Manage Node.js Apps with PM2',
    snippet: `pm2 start app.js --name my-app
pm2 list
pm2 stop my-app
pm2 startup`,
    description: 'PM2 is a production process manager for Node.js applications with a built-in load balancer. It keeps applications alive forever, reloads them without downtime, and helps manage logs and monitoring.',
    tags: ['servers', 'nodejs', 'pm2', 'process manager', 'javascript'],
  },
  {
    id: 'servers-11',
    category: 'Servers',
    subCategory: 'nginx',
    title: 'Nginx Reverse Proxy Block',
    snippet: `server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`,
    description: 'A common Nginx configuration to act as a reverse proxy, forwarding requests to a backend application running on another port (e.g., a Node.js or Spring Boot app).',
    tags: ['servers', 'nginx', 'config', 'reverse proxy', 'proxy_pass'],
  },
  {
    id: 'servers-12',
    category: 'Servers',
    subCategory: 'bash',
    title: 'View systemd Logs (journalctl)',
    snippet: `sudo journalctl -u nginx.service -f --since "1 hour ago"`,
    description: '`journalctl` is the tool for querying logs from the systemd journal. `-u` filters by service, `-f` follows the log, and `--since` filters by time.',
    tags: ['servers', 'linux', 'systemd', 'journalctl', 'logs', 'debug'],
  },
  {
    id: 'servers-13',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Manage Packages (APT)',
    snippet: `sudo apt update
sudo apt upgrade
sudo apt install htop`,
    description: 'The Advanced Package Tool (APT) is used on Debian-based systems like Ubuntu. `update` refreshes package lists, `upgrade` installs available upgrades, and `install` adds new packages.',
    tags: ['servers', 'linux', 'apt', 'package manager', 'ubuntu', 'debian'],
  },
  {
    id: 'servers-14',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Check Disk and Directory Usage',
    snippet: `df -h
du -sh /var/log`,
    description: '`df -h` shows overall disk space usage in a human-readable format. `du -sh` shows the summarized, human-readable disk usage of a specific directory.',
    tags: ['servers', 'linux', 'disk space', 'df', 'du', 'monitoring'],
  },
  {
    id: 'servers-15',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Manage Users and Ownership',
    snippet: `sudo useradd -m -s /bin/bash newuser
sudo chown -R www-data:www-data /var/www/html`,
    description: '`useradd` creates a new user (`-m` creates a home directory). `chown` changes the owner and group of files/directories (`-R` for recursive). Essential for web server permissions.',
    tags: ['servers', 'linux', 'users', 'permissions', 'chown', 'useradd'],
  },
  {
    id: 'servers-16',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Check Listening Ports',
    snippet: `sudo ss -tulnp`,
    description: 'The `ss` command (socket statistics) is the modern replacement for `netstat`. This command shows TCP (`-t`) and UDP (`-u`) sockets that are listening (`-l`), with numeric port numbers (`-n`), and the process using the socket (`-p`).',
    tags: ['servers', 'linux', 'networking', 'ports', 'ss', 'netstat', 'security'],
  },
  {
    id: 'servers-17',
    category: 'Servers',
    subCategory: 'bash',
    title: 'Schedule Cron Jobs',
    snippet: `crontab -e

# Run a backup script every day at 2:30 AM
30 2 * * * /path/to/backup.sh`,
    description: '`crontab -e` opens an editor to schedule recurring tasks (cron jobs). The format is: minute, hour, day of month, month, day of week, command.',
    tags: ['servers', 'linux', 'cron', 'crontab', 'scheduling', 'automation'],
  },
];
