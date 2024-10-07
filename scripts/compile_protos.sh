#!/usr/bin/env bash

# Root directory of app
ROOT_DIR=$(git rev-parse --show-toplevel)

# Path to Protoc Plugin
PROTOC_GEN_TS_PATH="${ROOT_DIR}/node_modules/.bin/protoc-gen-ts"

# Directory holding all .proto files
SRC_DIR="${ROOT_DIR}/src/protos"

# Directory to write generated code
OUT_DIR="${ROOT_DIR}/src/generated"

# Clean all existing generated files
rm -rf "${OUT_DIR}"
mkdir -p "${OUT_DIR}"

# Generate all messages
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_out="${OUT_DIR}" \
    --proto_path="${SRC_DIR}" \
    $(find "${SRC_DIR}" -iname "*.proto")

# Generate index.ts
echo "Generating index.ts..."
INDEX_FILE="${ROOT_DIR}/src/index.ts"
echo "// This file is auto-generated. Do not edit." > "${INDEX_FILE}"
for file in "${OUT_DIR}"/*.ts; do
    filename=$(basename "$file" .ts)
    echo "export * from './generated/${filename}.js';" >> "${INDEX_FILE}"
done

echo "Proto compilation completed successfully!"