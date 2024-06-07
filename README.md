# Repro 

```
ERROR: Transforming JavaScript decorators to the configured target environment ("node21.3.0") is not supported yet
ERROR: Transforming JavaScript decorators to the configured target environment ("node22.2.0") is not supported yet
```

## Setup
- Node: I tested with Node `v21.3.0` & `v22.2.0`, same error
- TSX: Code work with `v4.13.0` but start failing after, my repro is with the latest version `v4.13.2`.

## Steps to repro

```shell
tsx --version   
# tsx v4.13.2
# node v22.2.0

tsx src/index.ts 

# node:internal/modules/run_main:115
#     triggerUncaughtException(
#     ^
# Error [TransformError]: Transform failed with 1 error:
# github.com/TomChv/tsx-repro-regression-decorator-error/src/index.ts:13:0: ERROR: Transforming JavaScript decorators to the configured target environment ("node22.2.0") is not supported yet
```

Same with node `v21.3.0`

```shell
tsx --version
# tsx v4.13.2
# node v21.3.0

tsx src/index.ts 
# 
# node:internal/process/esm_loader:34
#       internalBinding('errors').triggerUncaughtException(
#                                 ^
# Error [TransformError]: Transform failed with 1 error:
# github.com/quartz-technology/playground/ts-decs-error/dagger/src/index.ts:13:0: ERROR: Transforming JavaScript decorators to the configured target environment ("node21.3.0") is not supported yet
```


## Works with `v4.13.0`

```shell
tsx --version
# tsx v4.13.0
# node v21.3.0

tsx src/index.ts 
# a
```

## Complete error traces

```shell
github.com/TomChv/tsx-repro-regression-decorator-error/src/index.ts:13:0: ERROR: Transforming JavaScript decorators to the configured target environment ("node21.3.0") is not supported yet
    at failureErrorWithLog (.nvm/versions/node/v21.3.0/lib/node_modules/tsx/node_modules/esbuild/lib/main.js:1651:15)
    at .nvm/versions/node/v21.3.0/lib/node_modules/tsx/node_modules/esbuild/lib/main.js:849:29
    at responseCallbacks.<computed> (.nvm/versions/node/v21.3.0/lib/node_modules/tsx/node_modules/esbuild/lib/main.js:704:9)
    at handleIncomingPacket (.nvm/versions/node/v21.3.0/lib/node_modules/tsx/node_modules/esbuild/lib/main.js:764:9)
    at Socket.readFromStdout (.nvm/versions/node/v21.3.0/lib/node_modules/tsx/node_modules/esbuild/lib/main.js:680:7)
    at Socket.emit (node:events:519:28)
    at addChunk (node:internal/streams/readable:559:12)
    at readableAddChunkPushByteMode (node:internal/streams/readable:510:3)
    at Readable.push (node:internal/streams/readable:390:5)
    at Pipe.onStreamRead (node:internal/stream_base_commons:190:23)
```