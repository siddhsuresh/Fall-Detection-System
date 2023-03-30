defmodule Iwp.Repo.Migrations.CreateFallSensorReadings do
  use Ecto.Migration

  def change do
    create table(:fall_sensor_readings) do
      add :accX, :float
      add :accY, :float
      add :accZ, :float
      add :gyX, :float
      add :gyY, :float
      add :gyZ, :float
      add :fall?, :boolean, default: false, null: false

      timestamps()
    end
  end
end
