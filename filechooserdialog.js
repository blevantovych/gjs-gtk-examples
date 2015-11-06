#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let filechooserdialog = new Gtk.FileChooserDialog();
filechooserdialog.set_title("FileChooserDialog");
filechooserdialog.add_button("Close", Gtk.ResponseType.CLOSE);
filechooserdialog.add_button("Select", Gtk.ResponseType.OK);
filechooserdialog.set_default_response(Gtk.ResponseType.OK);

var response = filechooserdialog.run();

if (response == Gtk.ResponseType.OK)
{
    print("Selected file: " + filechooserdialog.get_filename());
}

filechooserdialog.destroy();
