# Justfile for Nx project management

# Build a specific project
build name:
    npx nx build {{name}}

# Build all projects
build-all:
    npx nx run-many --target=build --all

# Lint a specific project
lint name:
    npx nx lint {{name}}

# Lint all projects
lint-all:
    npx nx run-many --target=lint --all

# Clean build artifacts
clean:
    npx nx reset

# Show project details
show name:
    npx nx show project {{name}}
