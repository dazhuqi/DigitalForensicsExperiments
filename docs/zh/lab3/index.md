# lab3实验笔记

提前准备好U盘并拷贝好相应文件
![U盘文件](../../images/lab3/01.png)

## 关于U盘写保护
点击下方链接查看详细步骤，此处不再赘述<br>
[参考链接](https://www.ninjaone.com/blog/enable-or-disable-write-protection-windows/)

## 制作磁盘镜像
![初始界面](../../images/lab3/02.png)
安装好 **FTK Imager** 后打开左上角File>Create Disk Image

选择Physical Drive
![制作磁盘1](../../images/lab3/03.png)

选择镜像文件类型，此处：
  - Raw(dd)：无压缩的原始二进制镜像，文件体积较大，但兼容性最好。
  - E01 (Expert Witness Format)：AccessData/ExileVision 封装格式，自带元数据、压缩及完整性校验（Hash），最常使用。
  - SMART：古董
  - AFF：完全开源，具有自检机制，常用于需要高容错和高度自定义元数据的场景
  ![镜像类型](../../images/lab3/05.png)

之后填写相关信息
![信息填写](../../images/lab3/04.png)

选择目的地址（非源U盘地址）以及填写镜像名，其中分卷默认1500，0代表不分片
![镜像目的地址](../../images/lab3/06.png)

确认无误后开始制作，等待即可<br>
注意，在实际取证中，**务必记录并比对源U盘与生成镜像的Hash值**，确保数据在制作过程中未发生损坏或篡改（以形成完整证据链）

## 分析镜像与提取
FTK Imager不仅能制作镜像，也是一个非常高效的免安装镜像浏览器.

![打开镜像示例](../../images/lab3/07.png)

- 被删除的文件，会被FTK Imager在图标上打叉
- 左侧Evidence Tree：可以查看原U盘文件及结构
- 选中相关文件，右键可以Export Files至目的路径

然而，FTK Imager的镜像预览是有限的。详细的镜像文件分析需要Autopsy，可以查看下一个[lab4](../lab4/index.md)的相关内容

## Reference
[U-drive-protection](https://www.ninjaone.com/blog/enable-or-disable-write-protection-windows/)<br>
[FTK Imager&Autopsy](https://medium.com/@yogasatriautama/forensic-analysis-flash-disk-with-ftk-imager-autopsy-49b6a2809762)