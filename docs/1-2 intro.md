# intro

## nodejs pros

1. single-threaded, based on event driven, non-blocking I/O model
2. perfect for building **fast** and **scalable** (可扩展) data-intensive (数据密集) apps
3. **JavaScript across the entire stack**: faster and more efficient development
4. **NPM**: huge library of open-source packages available for everyone for free
5. **very active** developer community

## use nodejs

1. API with database behind it (preferably NoSQL (非关系型), like MongoDB)
2. data streaming (think YouTube)
3. real-time chat application
4. server-side web application

## don't use

application with heavy server-side processing (CPU-intensive)
eg. 图像处理，视频转换，文件压缩等

## npm

package versioning 比如 1.3.4 依次代表 *主要版本.次要版本.补丁版本*，^ 代表接收所有次要版本和补丁版本，~ 则只接收补丁版本, * 包含所有版本。

1. 主要版本的变化往往带来 breaking change
2. 次要版本在向前兼容的同时带来一些功能更新
3. 补丁版本则是修复一些 bug

package updating:

1. npm outdated
2. npm update xxx
