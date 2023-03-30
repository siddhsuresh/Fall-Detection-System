defmodule Iwp.User.SensorReading do
  use Ecto.Schema
  import Ecto.Changeset

  schema "sensor_readings" do
    field :accX, :float
    field :accY, :float
    field :accZ, :float
    field :fall?, :boolean, default: false
    field :gyX, :float
    field :gyY, :float
    field :gyZ, :float

    timestamps()
  end

  @doc false
  def changeset(sensor_reading, attrs) do
    sensor_reading
    |> cast(attrs, [:accX, :accY, :accZ, :gyX, :gyY, :gyZ, :fall?])
    |> validate_required([:accX, :accY, :accZ, :gyX, :gyY, :gyZ, :fall?])
  end
end
