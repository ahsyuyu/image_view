#版本對照


##Overview
---
藏經有Lijiang, Lhasa, Derge...等版本，各版本由不同人在不同的時代篆刻、編輯。同樣的內容在不同的版本中頁碼會有差異，這個程式用來找出Lijiang與Lhasa之間內容的對照，作為版本對照的入門小練習。


* ###converter  
藏經頁碼的表示方法為1.1a, 1.1b, 1.2a...，a為正面，b為反面，這個程式用來練習把藏經頁碼表示法轉換為虛擬頁碼，下表舉例說明轉換規則  
    

    藏經頁碼 | 虛擬頁碼 | 
     ------ | ------- |
     1.1a | 1  | 
     1.1b | 2  | 
     1.2a | 3  | 
     1.2b | 4  | 
  
  
  
* ###page map  
  * 將行數轉為虛擬行，一頁設定為8行，以1.1a1為第一行開始，下表舉例說明轉換規則  


    藏經頁碼(加行) | 虛擬行 | 
     ------ | ------- |
     1.1a1 | 1  | 
     1.1b1 | 9  | 
     1.2a1 | 17  | 
     1.2b1 | 25  | 
  * 輸入頁碼搭配版本顯示出該頁所在的範圍
  * 在對照範圍依比例計算出對照頁
  
  
    

* ###image view
  * 計算出對照頁後，顯示該頁與對照頁的經文圖檔，為了方便校對，加上上一頁下一頁功能加速經文頁面切換