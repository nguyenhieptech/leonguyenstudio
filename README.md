# Leo Nguyen 💻

```bash
# Open terminal in folder "web"
cd web

# Install packages
pnpm i

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

```bash
# Build the image (dev)
docker build -t leonguyenstudio .

# Build the image (production)
docker build --target runner -t leonguyenstudio .

# Create and run the container for the first time
docker run --name leonguyenstudio -p 3000:3000 leonguyenstudio

# Stop the container
docker stop leonguyenstudio

# Run the container
docker start leonguyenstudio

# Remove the container
docker container rm leonguyenstudio
```
