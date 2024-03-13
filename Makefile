.DEFAULT_GOAL := usage

# user and repo
USER        = $$(whoami)
CURRENT_DIR = $(notdir $(shell pwd))

# terminal colours
RED     = \033[0;31m
GREEN   = \033[0;32m
YELLOW  = \033[0;33m
NC      = \033[0m
# versions
APP_REVISION    = $(shell git rev-parse HEAD)

.PHONY: install
install:
	npm install

.PHONY: test-open
test-open:
	npx cypress open

.PHONY: test-run
test-run:
	npm run e2e

.PHONY: audit-dependencies
audit-dependencies:
	npm audit

.PHONY: usage
usage:
	@echo
	@echo "Hi ${GREEN}${USER}!${NC} Welcome to ${RED}${CURRENT_DIR}${NC}"
	@echo
	@echo "Getting started"
	@echo
	@echo "${YELLOW}make install${NC}                  install dependencies"
	@echo "${YELLOW}make test-open${NC}                run open cypress tests suite"
	@echo "${YELLOW}make test-run${NC}                 run cypress tests in terminal"
	@echo "${YELLOW}make audit-dependencies${NC}       security audit of dependencies"
	@echo

