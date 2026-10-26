# lab2实验笔记

本实验所构造文件夹如图
![文件夹结构](../../images/lab2/01.png)   
本实验最终目的：简单delete文件的还原
![existing-data结构](../../images/lab2/02.png)

## Eraser工具使用
安装后打开该软件，左上角小箭头下选择**New Task**(或快捷键**Ctrl+N**)
![Eraser软件界面](../../images/lab2/03.png)

配置Task Properties：
  - 输入Task name(optional)，此处为示例输入
  - **Task Type**运行选择
    - Run immediately 立即运行
    - Run manually 手动运行
    - Run on restart 电脑重启时运行，如文件被占用/锁定时可等关机自动运行
    - Recurring 自动化定时运行，可自行设置时间表
  ![配置界面](../../images/lab2/04.png)

  - 左下角选择**Add Data**，进入后选择**目标类型**  
    - **File和Files in Folder**不同，File仅擦除该文件；但Files in Folder只擦除指定文件夹内部的所有内容，却保留这个文件夹本身
    - **Recycle Bin**：以最高安全标准彻底清空 Windows 回收站。常常配合Recurring定时安全清空回收站
    - **Unused disk space**：擦除分区中“已被标记为删除但尚未被覆写”的剩余空间，如普通delete，但是底层数据仍然存在，可能被恢复软件正常恢复
    - **Secure move**：将文件/文件夹安全地“剪切”到新位置，并彻底粉碎旧位置的残留数据。
    - **Drive/Partition**：彻底抹除整块硬盘或某个特定分区（盘符）上的所有内容。执行后该盘内容没有任何找回的可能
  ![选择需要擦出的数据](../../images/lab2/05.png)

  - **Eraser method**擦除方式
    - 这里使用上课提及的*US DOD*美国国防部标准。其原理是3次或7次覆写，每次写0写1再写随机数，最后校验。安全防范级别高，速度适中，推荐用于传统机械硬盘 HDD
    - 其次也有*Pseudorandom Data*。原理是纯随机数据覆盖1次，速度极快。推荐用于SSD固态硬盘或日常快速清理
    - 关于(default)：你可以打开界面中的Settings>Erase Settings>Default file eraser method查看。我的是Gutmann，这个方法较为古老且暴力，损耗硬盘寿命
  ![擦除方法选择](../../images/lab2/06.png)
  
加入数据后即可开始清理
![加入完成](../../images/lab2/08.png)

## Puran File Recovery使用

### 不使用Eraser的正常删除操作
放好硬盘内容
![E盘文件](../../images/lab2/07.png)

打开软件，选择suspect-disk-alpha盘
![打开界面](../../images/lab2/09.png)

选中Scan同行的Full Scan，Find lost files等选项，可以用树结构（左下角）查看


其中的扫描结果显示文件名被替换为$I...和$R...开头，但是扩展名正常。因为这个分区采用了NTFS文件系统，当这些文件被移入回收站时，系统为了防止重名冲突并对垃圾文件进行管理，会秘密对文件执行**重命名机制**。

其中 **$R...** 表示Real Data（真实数据），文件通常是正常大小，正是我们需要的，我们可以右键Export到指定文件夹中。可以使用原始路径直接查看得到<br>
而 **$I...** 表示Index/Information（索引/信息），是一个极小的配置文件，记录文件的原始文件名、原始存放路径以及删除的具体时间。

![扫描结果1](../../images/lab2/11.png)

最后可以正常恢复此类$R...文件
![恢复结果1](../../images/lab2/12.png)
![恢复结果1](../../images/lab2/13.png)
![恢复结果1](../../images/lab2/14.png)

### 使用Eraser的删除操作
同样的步骤，我们可以获得如下结果：
![扫描结果2](../../images/lab2/10.png)

可以发现扫描得到的文件全部损坏（文件名及扩展格式均为乱码，文件字节数0bytes）

## Reference
[Eraser-help](https://eraser.heidi.ie/help/)<br>
[PuranFileRecovery-help](https://www.puransoftware.com/File-Recovery.html)