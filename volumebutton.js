#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_volume_changed(volumebutton)
{
    print("VolumeButton value: " + volumebutton.get_value());
}

var window = new Gtk.Window();
window.set_title("VolumeButton");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var volumebutton = new Gtk.VolumeButton();
volumebutton.set_value(5);
volumebutton.connect("value-changed", function() {on_volume_changed(volumebutton)});
grid.attach(volumebutton, 0, 0, 1, 1);

window.show_all();

Gtk.main();
