# Lab 4 Notes

Install Autopsy and prepare the 001 image file for analysis.<br>
Autopsy should run on the host machine; otherwise, latency may occur.

## Creating a New Case
Select **Case > New Case** in the upper-left corner (or press **Ctrl+N**), enter the relevant information, and choose a folder in which to store the case.<br>
*Note: Do not use Chinese characters or special symbols in the path, and reserve at least 50 GB of free space on the destination drive.*
![Case information](../images/lab4/01.png)

Fill in optional information according to your needs.
![Optional information](../images/lab4/02.png)

## Adding a Data Source
Select **Host**. In general, create a new host.
![Select host](../images/lab4/03.png)

Choose the data source type:
  - **Disk Image or VM File**: a disk image (such as .dd, .raw, or .E01) or a virtual machine disk (such as a VMware virtual disk).
  - **Local Disk**: analyze a physical drive directly (recommended only when the drive is not critical to the investigation).
  - **Logical Files**: a specific folder or a collection of logical files.
  ![Source type](../images/lab4/04.png)

Select the path to the 001 file and the time zone.<br>
*Do not overlook orphan files; forensic work is about finding every clue.*
![Data source](../images/lab4/05.png)

For **Configure Ingest**, select modules according to your needs:
  - **Embedded File Extraction**: extract files embedded in archives or Office documents.
  - **Keyword Search**: enable batch keyword searches.
  - **Hash Lookup**: use a known hash database (such as NSRL) to identify or filter known system files.
  - **Exif Parser**: extract metadata such as GPS coordinates and photo timestamps.
  - **Recent Activity**: parse browser history, download records, USB connection history, recent documents, and more.
In general, the default settings are sufficient.

## Detailed Analysis
In the **Tree** view:
  - **Data Sources**: browse the original file system as a directory tree (NTFS, FAT, Ext4, HFS+, and others).
  - **File Views**:
    - **File Types**: view files grouped by type, such as images, videos, documents, archives, and executable programs.
    - **Deleted Files**: list deleted files that may be recoverable. Green files or files with a marker may be fully or partially recoverable.
    - **File Size**: locate files by size; for example, video files are generally large.
  - **Data Artifacts**:
    - **Metadata**: view detailed file metadata.
    - **Web Downloads**: automatically extract download history from browsers on the target device, including Chrome, Edge, and Firefox.
  - **Analysis Results**:
    - **Keyword Hits**: view matches for the keywords configured in the ingest modules.
  - **OS Accounts**: list user accounts that have existed on the operating system.
  - **Tags**: manage tags. When you find a clue, right-click the file and select **Add Tag** (for example, **Notable** or **Follow Up**).
  - **Score**: view items you have tagged. Autopsy also scores files based on its built-in rules.
  - **Reports**: generate analysis reports.
![Tree view](../images/lab4/06.png)

### Score Module
![Score module](../images/lab4/07.png)

Adding a tag:
![Add a note](../images/lab4/08.png)

Enter the information:
![Note information](../images/lab4/09.png)

## Generating an Analysis Report
Select **Generate Report** at the top, check the analysis items you need, and save the report as an HTML file.

## References
[Autopsy help](https://sleuthkit.org/autopsy/docs/user-docs/4.23.0/)
