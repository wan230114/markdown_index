# 写在前面
> 感谢原作在git上分享的自动编号插件，因个人需要，在这基础上，我添加了一个功能，自定义标题起始编号。  
> - 可通过两个选项实现：  
>   - 1是自定义起始数字编号；  
>   - 2是通过文本中第一次出现“# 3.”这样的数字去自动获取起始编号。  
>
> 原作地址：    
> markdown-index - Visual Studio Marketplace  
> https://marketplace.visualstudio.com/items?itemName=legendmohe.markdown-index

使用说明：  
<!-- ![](https://img-blog.csdnimg.cn/20191210171005295.gif) -->

<img src="https://img-blog.csdnimg.cn/20191210171005295.gif" width="800">

# MarkdownIndex

UPDATE 2019/11/5: 
- Fix issue [#8](https://github.com/legendmohe/markdown_index/issues/8).

UPDATE 2019/2/1:
- Fix Potential security vulnerability

UPDATE 2018/4/20: 
- Fix issue [#5](https://github.com/legendmohe/markdown_index/issues/5).

UPDATE 2018/2/4: 
- Fix issue [#2](https://github.com/legendmohe/markdown_index/issues/2).
- Add configuration for index indocator.

thanks to [firejq](https://github.com/firejq)

## 1. Introduction(English Version)

### 1.1. Feature

markdown_index is an extension that can add serial numbers to your markdown title.

Suppose the original text is as follows:

    # a
    foolbar

    ## a-b
    foolbar

    ## a-c
    foolbar
    foolbar

    ### a-c-d
    foolbar

    ```
        This is code block
    ```

    ## a-e
    foolbar

        This is code block too

    # f
    foolbar

Install markdown_index, run `> markdown add index`, you can automatically add the serial number, as follows:

    # 1. a
    foolbar

    ## 1.1. a-b
    foolbar

    ## 1.2. a-c
    foolbar
    foolbar

    ### 1.2.1. a-c-d
    foolbar

    ```
        This is code block
    ```

    ## 1.3. a-e
    foolbar

        This is code block too

    # 2. f
    foolbar

### 1.2. Note

Note: Run command again can automatically update the serial number.

Note: You can configure index indicator in settings.json.

github: [https://github.com/legendmohe/markdown_index](https://github.com/legendmohe/markdown_index)

email: legendmohe@foxmail.com

### 1.3. Contributor

- [legendmohe](https://github.com/legendmohe)
- [sherlockbear](https://github.com/sherlockbear)
- [firejq](https://github.com/firejq)

## 2. 简介（简体中文版）

### 2.1. 功能

markdown_index是一个可以为你的markdown标题添加序号的插件。

假设原文如下所示：

    # a
    foolbar

    ## a-b
    foolbar

    ## a-c
    foolbar
    foolbar

    ### a-c-d
    foolbar

    ```
        This is code block
    ```

    ## a-e
    foolbar

        This is code block too

    # f
    foolbar

安装markdown_index，运行 `> markdown add index`，即可自动添加序号，如下所示：

    # 1. a
    foolbar

    ## 1.1. a-b
    foolbar

    ## 1.2. a-c
    foolbar
    foolbar

    ### 1.2.1. a-c-d
    foolbar

    ```
        This is code block
    ```

    ## 1.3. a-e
    foolbar

        This is code block too

    # 2. f
    foolbar

注：重复运行命令可以自动更新序号。

注：可以在settings.json中设置标题的记号，默认为‘#’。

github: [https://github.com/legendmohe/markdown_index](https://github.com/legendmohe/markdown_index)

email: legendmohe@foxmail.com

### 2.2. 贡献者

- [legendmohe](https://github.com/legendmohe)
- [sherlockbear](https://github.com/sherlockbear)
- [firejq](https://github.com/firejq)
