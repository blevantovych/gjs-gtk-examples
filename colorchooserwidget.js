#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_color_activated(colorchooserwidget)
{
    var rgba = colorchooserwidget.get_rgba();
    print("Red: " + rgba.red);
    print("Green: " + rgba.green);
    print("Blue: " + rgba.blue);
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("ColorChooserWidget");
window.set_border_width(5);
window.connect("destroy", Gtk.main_quit);

var colorchooserwidget = new Gtk.ColorChooserWidget();
colorchooserwidget.set_use_alpha(true);
colorchooserwidget.connect("color-activated", function() {on_color_activated(colorchooserwidget)});
window.add(colorchooserwidget);

window.show_all();

Gtk.main();
