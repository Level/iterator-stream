# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## v2

Support for encodings was removed, so if your code relies on `options.decoder` for decoding keys and values you need to handle this yourself, e.g. by a transform stream.

Dropped support for node 0.10, 0.12 and iojs.
