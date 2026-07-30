# System Architecture Specification

## Overview
Smart Farm Platform Microservice Architecture Diagram:

```
[ Browser / Frontend (React + TS) ]
                |
                v
      [ Nginx Reverse Proxy ]
         /              \
        v                v
[ Spring Boot API ]  [ FastAPI AI Microservice ]
        |
        v
 [ MySQL Database ]
```
