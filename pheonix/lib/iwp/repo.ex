defmodule Iwp.Repo do
  use Ecto.Repo,
    otp_app: :iwp,
    adapter: Ecto.Adapters.Postgres
end
