#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_font_activated(fontchooserwidget)
{
    print(fontchooserwidget.get_font())
}

var window = new Gtk.Window();
window.set_title("FontChooserWidget");
window.connect("destroy", Gtk.main_quit);

var fontchooserwidget = new Gtk.FontChooserWidget();
fontchooserwidget.connect("font-activated", function() {on_font_activated(fontchooserwidget)});
window.add(fontchooserwidget);

window.show_all();

Gtk.main();
