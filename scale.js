#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_scale_changed(scale)
{
    print(scale.get_value());
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Scale");
window.set_default_size(200, -1);
window.connect("destroy", Gtk.main_quit);

let scale = new Gtk.Scale();
scale.set_range(0, 10);
scale.set_value(7);
scale.connect("value-changed", function() {on_scale_changed(scale)});
window.add(scale);

window.show_all();

Gtk.main();
