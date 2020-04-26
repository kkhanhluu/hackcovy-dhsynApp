# dhsynApp_mobile
Ứng dụng dự thi HackCovy tháng 4-2020  
Đây là github repo phần mobile của hệ thống quản lý Khu cách ly  
Repo Backend: https://github.com/nhnam1105/hackcovy-backend  
Repo CMS:  
Thực hiện bởi nhóm: dshyn - Du học sinh yêu nước


# Cài đặt
1. Clone repo  
2. npm install -g expo-cli  (bỏ -g nếu không muốn cài đặt global)
2. npm install 
4. npm start   
 
## Nếu bạn gặp lỗi  
>fontFamily "FontAwesome" is not a system font and has not been loaded through Font.loadAsync.
>If you intended to use a system font, make sure you typed the name correctly and that it is supported by your device operating system.

Chạy lệnh sau để sửa 
>rm -rf ./node_modules/expo/node_modules/expo-font/
