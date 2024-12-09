interface CommandsType {
  [key: string]: string;
}

export const commands: CommandsType = {
  help: `Available commands:
  Linux-style commands:
  - ls: List all available sections
  - cd [section]: View specific section (e.g., cd experience)
  - pwd: Show current section
  - cat [file]: View content of a specific file
  - clear: Clear terminal output
  - logout: Exit the terminal session
  
  Quick commands:
  - about: Brief introduction
  - contact: Show contact information`,

  ls: `Available sections:
  drwxr-xr-x  personal-info/
  drwxr-xr-x  experience/
  drwxr-xr-x  education/
  drwxr-xr-x  skills/
  drwxr-xr-x  projects/
  
Type 'cd [section]' to navigate to a section
Type 'cat [filename]' to view specific files`,

  "cd personal-info": `Contents of personal-info/:
  -rw-r--r--  name.txt
  -rw-r--r--  contact.txt
  -rw-r--r--  about.txt
  
Type 'cat [filename]' to view file contents`,

  "cd experience": `Contents of experience/:
  -rw-r--r--  cyberguard.txt
  -rw-r--r--  defenselabs.txt
  
Type 'cat [filename]' to view file contents`,

  "cd education": `Contents of education/:
  -rw-r--r--  degrees.txt
  -rw-r--r--  certifications.txt
  
Type 'cat [filename]' to view file contents`,

  "cd skills": `Contents of skills/:
  -rw-r--r--  technical.txt
  -rw-r--r--  tools.txt
  
Type 'cat [filename]' to view file contents`,

  "cd projects": `Contents of projects/:
  -rw-r--r--  vulnhunter.txt
  -rw-r--r--  cryptoguard.txt
  -rw-r--r--  netdefender.txt
  
Type 'cat [filename]' to view file contents`,

  "cat name.txt": "Alex Thompson",

  "cat contact.txt": `Contact Information:
Email: hack@securemail.dev
Phone: +1 (555) 137-3373
GitHub: github.com/hackmaster
LinkedIn: linkedin.com/in/securealex`,

  "cat about.txt": `I'm a senior security engineer specializing in offensive security and penetration testing. With over 8 years of experience in cybersecurity, I've helped organizations identify and fix critical vulnerabilities before they could be exploited.

My passion lies in reverse engineering, malware analysis, and developing security tools that make the digital world safer.`,

  "cat cyberguard.txt": `Lead Security Engineer @ CyberGuard Inc.
2020 - Present
- Led red team operations for Fortune 500 clients
- Developed custom security tools and exploits
- Managed security audits and compliance`,

  "cat defenselabs.txt": `Security Researcher @ DefenseLabs
2018 - 2020
- Discovered and reported critical vulnerabilities
- Published security research papers
- Developed automated security testing frameworks`,

  "cat degrees.txt": `Education:
- Master's in Cybersecurity - MIT
- Bachelor's in Computer Science - Stanford University`,

  "cat certifications.txt": `Certifications:
- OSCP (Offensive Security Certified Professional)
- CEH (Certified Ethical Hacker)
- CISSP (Certified Information Systems Security Professional)
- CompTIA Security+`,

  "cat technical.txt": `Technical Skills:
- Penetration Testing
- Network Security
- Cryptography
- Malware Analysis
- Python, C++, Assembly
- Reverse Engineering`,

  "cat tools.txt": `Tools & Technologies:
- Metasploit
- Wireshark
- Burp Suite
- IDA Pro
- Ghidra
- Custom Security Tools`,

  "cat vulnhunter.txt": `VulnHunter
- Automated vulnerability scanner
- Python-based security tool
- Integrated with multiple security databases
- Custom exploit development framework`,

  "cat cryptoguard.txt": `CryptoGuard
- End-to-end encryption tool
- Military-grade encryption algorithms
- Secure key management system
- Cross-platform compatibility`,

  "cat netdefender.txt": `NetDefender
- Network intrusion detection system
- Real-time threat monitoring
- Machine learning-based analysis
- Custom signature development`,

  pwd: "Current directory: /home/user",

  clear: "[Terminal Cleared]",

  logout: "Logging out...",

  // Shortcuts
  about: "Type 'cat about.txt' to view introduction",
  contact: "Type 'cat contact.txt' to view contact information"
};