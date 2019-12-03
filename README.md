# UFJF Segurança - Autenticação em dispositivos IOT (API)

API para autenticação de dispositivos IOT

## Rotas

- `/iot`: Rotas para dispositivos IOT
  - `/auth`: Obter novo Token de autenticação (usar apenas quando não possuir)
  - `/data/:DADOS`: Salva dados no banco. Requer token no header (JSON WebToken)
- `/app`: Rotas para cliente web
  - `/devices`, `/devices/new`, `/devices/:id`: obtém/deleta dispositiovos IOT
  - `/devices/:id/authorize (PUT, DELETE)`: Adiciona/remove autorização
  - `/data`: Obtém dados cadastrados por dispositivos IOT  