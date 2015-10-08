#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_volume_changed(volumebutton)
{
    print("Current volume: " + volumebutton.get_value());
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("VolumeButton");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let volumebutton = new Gtk.VolumeButton();
volumebutton.set_value(5);
volumebutton.connect("value-changed", function() {on_volume_changed(volumebutton)});
grid.attach(volumebutton, 0, 0, 1, 1);

window.show_all();

Gtk.main();
