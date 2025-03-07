FROM oven/bun:1

RUN apt update  && apt install -y curl

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]