#!/usr/bin/env gjs

Gtk = imports.gi.Gtk;

Gtk.init(null);

colorchooserdialog = new Gtk.ColorChooserDialog();
colorchooserdialog.set_title("ColorChooserDialog");

if (colorchooserdialog.run() == Gtk.ResponseType.OK)
{
    var color = colorchooserdialog.get_rgba();
    print("Color set to " + color.red + ", " + color.green + ", " + color.blue);
}

colorchooserdialog.destroy();
