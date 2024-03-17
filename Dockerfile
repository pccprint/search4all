# 使用官方 Python 基础镜像
FROM python:3.9

# 设置工作目录
WORKDIR /

# 将当前目录内容复制到容器的 / 目录
COPY . /

# 安装 Python 依赖
RUN pip install --no-cache-dir -r requirements.txt

# 切换到 web 目录，安装 Node.js 依赖并构建 web 应用
WORKDIR /web
RUN npm install && npm run build

# 切换回根目录
WORKDIR /

# 运行 Python 服务器
CMD ["python", "search4all.py"]