
# tmux 명령어 
새창 ctrl + b + c
창종료 ctrl + b + &
창스크롤 ctrl + b + [
주로 ctrl + b  + 명령들
나오기 ctrl+b+d
다시붙기 tmux attach  , tmux attach -t 넘
세션리스트 tmux ls
세션선택 이동 ctrl + b + s
윈도우 죽이기 tmux kill-window -t :1

# 참고 
http://blog.outsider.ne.kr/699

# 세션 오래 유지용
/etc/ssh/ssh_config  ~/.ssh/config for Mac:

Host *
ServerAliveInterval 120
ClientAliveInterval 300



ssh -o ServerAliveInterval=10 user@remote-ssh-server-ip