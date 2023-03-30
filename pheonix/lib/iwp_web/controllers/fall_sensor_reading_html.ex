defmodule IwpWeb.FallSensorReadingHTML do
  use IwpWeb, :html

  embed_templates "fall_sensor_reading_html/*"

  @doc """
  Renders a fall_sensor_reading form.
  """
  attr :changeset, Ecto.Changeset, required: true
  attr :action, :string, required: true

  def fall_sensor_reading_form(assigns)
end
