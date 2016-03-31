#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var colorchooserdialog = new Gtk.ColorChooserDialog();
colorchooserdialog.set_title("ColorChooserDialog");
colorchooserdialog.set_use_alpha(true);

if (colorchooserdialog.run() == Gtk.ResponseType.OK)
{
    var rgba = colorchooserdialog.get_rgba();
    print("Red: " + rgba.red);
    print("Green: " + rgba.green);
    print("Blue: " + rgba.blue);
}

colorchooserdialog.destroy();
