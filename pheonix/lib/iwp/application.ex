defmodule Iwp.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      IwpWeb.Telemetry,
      # Start the Ecto repository
      Iwp.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Iwp.PubSub},
      # Start Finch
      {Finch, name: Iwp.Finch},
      # Start the Endpoint (http/https)
      IwpWeb.Endpoint
      # Start a worker by calling: Iwp.Worker.start_link(arg)
      # {Iwp.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Iwp.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    IwpWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
