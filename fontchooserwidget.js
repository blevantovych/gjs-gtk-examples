#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_font_activated(fontchooserwidget)
{
    print(fontchooserwidget.get_font())
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("FontChooserWidget");
window.connect("destroy", Gtk.main_quit);

let fontchooserwidget = new Gtk.FontChooserWidget();
fontchooserwidget.connect("font-activated", function() {on_font_activated(fontchooserwidget)});
window.add(fontchooserwidget);

window.show_all();

Gtk.main();
