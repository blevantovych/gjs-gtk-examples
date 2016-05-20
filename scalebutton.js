#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_scale_changed(scalebutton)
{
    print("ScaleButton value: " + scalebutton.get_value());
}

var window = new Gtk.Window();
window.set_title("ScaleButton");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var scalebutton = new Gtk.ScaleButton();
scalebutton.set_value(5);
scalebutton.set_icons(["gtk-go-up", "gtk-go-down"]);
scalebutton.connect("value-changed", function() {on_scale_changed(scalebutton)});
grid.attach(scalebutton, 0, 0, 1, 1);

window.show_all();

Gtk.main();
